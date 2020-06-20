import { StyledSystemTheme, StyledSystemConfig } from '@wheelroom/styled-system'

export interface WrSystemConfig extends StyledSystemConfig {
  ignoreProperties: string[]
  propertyAliases: {
    [cssPropertyName: string]: string[]
  }
  responsiveProperties: string[]
  scales: {
    fontSizeScale: string[]
    fontWeightScale: string[]
    lineHeightScale: string[]
    spaceScale: string[]
  }
  initialZeroScales: string[]
  stringMaps: {
    colorMap: string[]
    fontMap: string[]
  }
  units: {
    percent: string[]
    px: string[]
  }
}

export interface WrSystemTheme extends StyledSystemTheme {
  breakpoints: string[]
  fontMap: {
    [fontName: string]: string
  }
  colorMap: {
    [colorName: string]: string
  }
  fontSizeScale: number[]
  fontWeightScale: number[]
  lineHeightScale: number[]
  spaceScale: number[]
}
