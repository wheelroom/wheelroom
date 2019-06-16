// import { componentsMap } from '../../components/components-map'
import { ComponentConfig } from '../types/components-map'
import {
  ComponentTypesByModule,
  GatsbyThemeConfig,
} from '../types/gatsby-theme-config'

export const getAppDir = () => {
  return process.cwd()
}

export const getModule = async (packageName: string) => {
  const moduleDir = getAppDir() + '/node_modules/' + packageName
  return await import(moduleDir)
}

export const getGatsbyConfig = async () => {
  let config
  try {
    config = await import(getAppDir() + '/gatsby-config.js')
  } catch (error) {
    console.log('Could not find gatsby-config.js in', getAppDir(), error)
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
        configsByResolve[resolve] = []
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
  console.log('configsByModule', configsByModule)

  const configs = [] as ComponentConfig[]
  await Promise.all(
    Object.entries(configsByModule).map(
      async ([resolve, componentConfig]: [string, any]) => {
        const module = await getModule(resolve)
        console.log('Got module', resolve, module)
        const componentsMap = module.componentsMap
        configs.push(componentsMap[componentConfig.componentType])
      }
    )
  )

  return configs
}
