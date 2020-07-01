import { SectionWheelTheme } from '@wheelroom/core'
import { wrSystemTheme } from '../wr-system-theme'
import { elementNcss } from './element-ncss/element-ncss'
import { styles } from './ncss-trees/styles'
import { dark } from './colors/dark'
import { light } from './colors/light'
import { options } from './options'

export const glacierLight: SectionWheelTheme = {
  themeName: 'Glacier light',
  elementNcss,
  styles,
  options,
  wrSystemTheme: { ...wrSystemTheme, colorMap: light },
}

export const glacierDark: SectionWheelTheme = {
  themeName: 'Glacier dark',
  elementNcss,
  styles,
  options,
  wrSystemTheme: { ...wrSystemTheme, colorMap: dark },
}
