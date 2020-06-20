import {
  breakpointsPreset,
  mapsPreset,
  scalesPreset,
  WrSystemTheme,
} from '../../src-core'

export const styledSystemTheme: WrSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
  colorMap: {},
}
