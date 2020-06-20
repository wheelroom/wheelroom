import { SectionWheelTheme } from '../../../src-core'
import { wrSystemTheme } from '../wr-system-theme'
import { elementStyles } from './element-styles/element-styles'
import { styles } from './wheel-styles/styles'
import { dark } from './colors/dark'
import { light } from './colors/light'

export const yosemiteLight: SectionWheelTheme = {
  elementStyles,
  styles,
  wrSystemTheme: { ...wrSystemTheme, colorMap: light },
}

export const yosemiteDark: SectionWheelTheme = {
  elementStyles,
  styles,
  wrSystemTheme: { ...wrSystemTheme, colorMap: dark },
}
