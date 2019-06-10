import { componentsMap } from '../../components/components-map'
import { ComponentConfig } from '../types/components-map'
import { GatsbyThemeConfig, ThemeOptions } from '../types/gatsby-theme-config'

export const getAppDir = () => {
  return process.cwd()
}

export const getPackageDir = (packageName: string) => {
  return getAppDir() + '/node_modules/' + packageName
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

export const getConfigsFromOptions = (
  options: ThemeOptions
): ComponentConfig[] => {
  return options.models.map((componentId: string) => {
    return { ...componentsMap[componentId], componentId }
  })
}

export const getComponentConfigs = async () => {
  const config = await getGatsbyConfig()
  const themes = config.__experimentalThemes as GatsbyThemeConfig[]

  return themes.reduce(
    (result, theme) => [...result, ...getConfigsFromOptions(theme.options)],
    [] as ComponentConfig[]
  )
}
