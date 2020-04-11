import { styledSystem } from '@wheelroom/styled-system'
import { styledSystemConfig } from './styled-system-config'
import { lightTheme } from './themes/light-theme'
import { darkTheme } from './themes/dark-theme'

export type ThemeId = 'light' | 'dark' | undefined
const themeMap = {
  light: lightTheme,
  dark: darkTheme,
}

export const systemCss = (props: any, themeId: ThemeId = 'light') =>
  styledSystem(styledSystemConfig, themeMap[themeId], { ncss: props.ncss })

export const getColorMap = (themeId: ThemeId = 'light') => {
  return themeMap[themeId].colorMap
}
