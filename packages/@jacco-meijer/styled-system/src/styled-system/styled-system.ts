import { defaultConfig } from './config/default-config'
import { defaultTheme } from './config/default-theme'
import { parseStyles } from './parse-styles'
import { Config } from './types/config'
import { Theme } from './types/theme'

export const styledSystem = (config: Config, theme: Theme, props: any) => {
  if (!props) {
    return
  }

  if (Object.entries(config).length === 0) {
    console.log(`Config not found, using default config`)
    config = defaultConfig
  }

  if (Object.entries(theme).length === 0) {
    console.log(`Theme not found, using default theme`)
    theme = defaultTheme
  }

  return parseStyles({ config, theme, props })
}
