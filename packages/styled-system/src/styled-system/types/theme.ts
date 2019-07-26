export interface ThemeObject {
  [itemName: string]: string
}

export type ThemeList = number[] | string[]

export interface Theme {
  [topic: string]: ThemeObject | ThemeList
}

export interface DefaultTheme extends Theme {
  breakpoints: string[]
  colorMap: {
    [colorName: string]: string
  }
  fontMap: {
    [fontName: string]: string
  }
  fontSizeScale: number[]
  fontWeightScale: number[]
  heightScale: number[]
  lineHeightScale: number[]
  spaceScale: number[]
}
