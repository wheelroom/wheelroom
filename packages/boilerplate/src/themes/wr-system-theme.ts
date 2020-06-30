import {
  breakpointsPreset,
  mapsPreset,
  scalesPreset,
  WrSystemTheme,
} from '@wheelroom/core'

export const wrSystemTheme: WrSystemTheme = {
  ...breakpointsPreset,
  ...mapsPreset,
  ...scalesPreset,
  colorMap: {},
}
