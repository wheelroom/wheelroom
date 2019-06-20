import { ComponentConfig } from '../types/component-config'
import { ComponentsMap } from '../types/components-map'
import {
  ComponentToBeResolved,
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
  let module = null
  let errorMessage = ''
  const npmModuleDir = `${getAppDir()}/node_modules/${packageName}`
  const localModuleDir = `${getAppDir()}/${resolveLocalModules}/${packageName}`
  try {
    module = await import(npmModuleDir)
  } catch (error) {
    errorMessage += error
    module = null
  }
  if (module) {
    return module
  }
  try {
    module = await import(localModuleDir)
  } catch (error) {
    errorMessage += error
    module = null
  }
  if (module) {
    return module
  }
  console.log(`Could not import ${packageName}
- tried: ${npmModuleDir}
- tried: ${localModuleDir}
- ${errorMessage}
`)
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
          componentsToResolve: [] as ComponentToBeResolved[],
          resolveLocalModules: theme.options.resolveLocalModules,
        }
      }
      resolvers[resolve].componentsToResolve.push({
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
          return
        }
        console.log(`Imported module ${resolve}`)
        if (module && !module.componentsMap) {
          console.log(`Could not find componentsMap object in ${resolve}`)
          return
        }
        const componentsMap = module.componentsMap as ComponentsMap
        resolveInfo.componentsToResolve.forEach(
          (componentConfig: ComponentToBeResolved) => {
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
          }
        )
      }
    )
  )

  return configs
}
