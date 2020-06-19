import {
  breakpointsPreset,
  mapsPreset,
  scalesPreset,
  StyledSystemTheme,
} from '../../src-core'
import { colors } from './colors'

export const dark: StyledSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
  colorMap: {
    ...colors,
  },
}
