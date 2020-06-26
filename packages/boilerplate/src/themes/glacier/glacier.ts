import { SectionWheelTheme } from '../../../src-core'
import { wrSystemTheme } from '../wr-system-theme'
import { elementNcss } from './element-styles/element-styles'
import { styles } from './wheel-styles/styles'
import { dark } from './colors/dark'
import { light } from './colors/light'

export const glacierLight: SectionWheelTheme = {
  themeName: 'Glacier light',
  elementNcss,
  styles,
  wrSystemTheme: { ...wrSystemTheme, colorMap: light },
}

export const glacierDark: SectionWheelTheme = {
  themeName: 'Glacier dark',
  elementNcss,
  styles,
  wrSystemTheme: { ...wrSystemTheme, colorMap: dark },
}
