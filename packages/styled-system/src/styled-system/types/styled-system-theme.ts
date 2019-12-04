export interface ThemeObject {
  [itemName: string]: string
}

export type ThemeList = number[] | string[]

export interface StyledSystemTheme {
  [topic: string]: ThemeObject | ThemeList
}
