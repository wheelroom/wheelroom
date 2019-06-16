import { ComponentConfig } from '../types/components-map'
import {
  ComponentType,
  ComponentTypesByModule,
  GatsbyThemeConfig,
} from '../types/gatsby-theme-config'

export const getAppDir = () => {
  return process.cwd()
}

export const getModule = async (packageName: string) => {
  // TODO: Lookup configured local-modules path as well
  const moduleDir = `${getAppDir()}/node_modules/${packageName}`
  return await import(moduleDir)
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
const getComponentTypesByResolve = (themes: GatsbyThemeConfig[]) => {
  const configsByResolve = {} as ComponentTypesByModule
  themes.forEach((theme: GatsbyThemeConfig) => {
    Object.entries(theme.options.componentTypes).forEach(([type, config]) => {
      const resolve = config.resolve || theme.options.defaultComponentResolve
      if (!(resolve in configsByResolve)) {
        configsByResolve[resolve] = [] as ComponentType[]
      }
      configsByResolve[resolve].push({
        componentType: type,
        overwriteVariations: config.overwriteVariations || false,
        variations: config.variations || [],
      })
    })
  })
  return configsByResolve
}

export const getComponentConfigs = async () => {
  const config = await getGatsbyConfig()
  const themes = config.__experimentalThemes as GatsbyThemeConfig[]
  const configsByModule = getComponentTypesByResolve(themes)

  const configs = [] as ComponentConfig[]
  await Promise.all(
    Object.entries(configsByModule).map(
      async ([resolve, componentConfigs]: [string, any]) => {
        let module
        let allGood = true
        try {
          module = await getModule(resolve)
        } catch (error) {
          console.log(`Could not resolve ${resolve} in ${getAppDir()}`)
          allGood = false
        }
        if (module && !('componentsMap' in module)) {
          console.log(`Could not find componentsMap object in ${resolve}`)
          allGood = false
        }
        if (allGood) {
          const componentsMap = module.componentsMap
          componentConfigs.forEach((componentConfig: ComponentType) => {
            if (componentConfig.componentType in componentsMap) {
              configs.push(componentsMap[componentConfig.componentType])
              // TODO: Add variation details to config
            } else {
              console.log(
                `Could not find ${componentConfig.componentType} in ${resolve}`
              )
            }
          })
        }
      }
    )
  )

  return configs
}
