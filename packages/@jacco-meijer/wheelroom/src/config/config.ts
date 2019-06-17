import { ComponentConfig, ComponentsMap } from '../types/components-map'
import {
  ComponentType,
  GatsbyThemeConfig,
  ResolveInfo,
  Resolvers,
} from '../types/gatsby-theme-config'

export const getAppDir = () => {
  return process.cwd()
}

export const getModule = async (
  packageName: string,
  resolveLocalModules: string
) => {
  let module
  let moduleDir = `${getAppDir()}/node_modules/${packageName}`
  try {
    module = await import(moduleDir)
  } catch (error) {
    return false
  }
  if (module) {
    return module
  }
  moduleDir = `${getAppDir()}/${resolveLocalModules}/${packageName}`
  try {
    module = await import(moduleDir)
  } catch (error) {
    return false
  }
  return module
}

export const getGatsbyConfig = async () => {
  let config
  const target = `${getAppDir()}/gatsby-config.js`
  try {
    config = await import(target)
  } catch (error) {
    console.log(`Could not load and parse: ${target}`)
    console.log(error)
  }
  return config
}
/** Resolve is configured per component. Here we group components by the module
 * they are resolved from. To be able to fetch the component config more
 * efficently
 */
const getResolvers = (themes: GatsbyThemeConfig[]) => {
  const resolvers = {} as Resolvers
  themes.forEach((theme: GatsbyThemeConfig) => {
    Object.entries(theme.options.componentTypes).forEach(([type, config]) => {
      const resolve = config.resolve || theme.options.defaultComponentResolve
      if (!(resolve in resolvers)) {
        resolvers[resolve] = {
          componentTypes: [] as ComponentType[],
          resolveLocalModules: theme.options.resolveLocalModules,
        }
      }
      resolvers[resolve].componentTypes.push({
        componentType: type,
        overwriteVariations: config.overwriteVariations || false,
        variations: config.variations || [],
      })
    })
  })
  return resolvers
}

export const getComponentConfigs = async () => {
  const gatsbyConfig = await getGatsbyConfig()
  const themes = gatsbyConfig.__experimentalThemes as GatsbyThemeConfig[]
  const resolvers = getResolvers(themes)

  const configs = [] as ComponentConfig[]
  await Promise.all(
    Object.entries(resolvers).map(
      async ([resolve, resolveInfo]: [string, ResolveInfo]) => {
        let module
        module = await getModule(resolve, resolveInfo.resolveLocalModules)
        if (!module) {
          console.log(
            `Could not import ${resolve}, also looked in ${resolveInfo.resolveLocalModules}`
          )
          return
        }
        if (module && !module.componentsMap) {
          console.log(`Could not find componentsMap object in ${resolve}`)
          return
        }
        const componentsMap = module.componentsMap as ComponentsMap
        resolveInfo.componentTypes.forEach((componentConfig: ComponentType) => {
          if (componentConfig.componentType in componentsMap) {
            const newConfig = Object.assign(
              {
                overwriteVariations: componentConfig.overwriteVariations,
                variations: componentConfig.variations,
              },
              componentsMap[componentConfig.componentType]
            )

            configs.push(newConfig)
          } else {
            console.log(
              `Could not find ${componentConfig.componentType} in ${resolve}`
            )
          }
        })
      }
    )
  )

  return configs
}
