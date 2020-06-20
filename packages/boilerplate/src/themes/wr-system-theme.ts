import {
  breakpointsPreset,
  mapsPreset,
  scalesPreset,
  WrSystemTheme,
} from '../../src-core'

export const wrSystemTheme: WrSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
  colorMap: {},
}
