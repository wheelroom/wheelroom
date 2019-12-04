import { defaultConfig } from './config/default-config'
import { defaultTheme } from './config/default-theme'
import { parseStyles } from './parse-styles'
import { StyledSystemConfig } from './types/styled-system-config'
import { StyledSystemTheme } from './types/styled-system-theme'

export const styledSystem = (
  config: StyledSystemConfig,
  theme: StyledSystemTheme,
  props: any
) => {
  if (!props || !('ncss' in props)) {
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

  // Only parse styles found in ncss key
  return parseStyles({ config, theme, props: props.ncss })
}
