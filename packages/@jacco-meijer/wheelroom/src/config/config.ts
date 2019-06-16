// import { componentsMap } from '../../components/components-map'
import { ComponentConfig } from '../types/components-map'
import { GatsbyThemeConfig } from '../types/gatsby-theme-config'

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

export const getComponentConfigs = async () => {
  const config = await getGatsbyConfig()
  const themes = config.__experimentalThemes as GatsbyThemeConfig[]

  const configs = [] as ComponentConfig[]
  await Promise.all(
    themes.map(async (theme: GatsbyThemeConfig) => {
      const module = await getModule(theme.resolve)
      const componentsMap = module.componentsMap
      const addConfigs = theme.options.componentTypes.map(
        (componentType: string) => componentsMap[componentType]
      )
      configs.push(...addConfigs)
    })
  )
  return configs
}
