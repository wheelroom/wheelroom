import { SectionWheelTheme } from '../../../src-core'
import { wrSystemTheme } from '../wr-system-theme'
import { elementNcss } from './element-ncss/element-ncss'
import { styles } from './ncss-trees/styles'
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
