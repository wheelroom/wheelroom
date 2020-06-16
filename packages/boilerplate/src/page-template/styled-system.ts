import {
  breakpointsPreset,
  mapsPreset,
  scalesPreset,
  StyledSystemTheme,
} from '../../wheelroom'
import { colors } from './colors'

export const dark: StyledSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
  colorMap: {
    ...colors,

  },
}
