export interface ThemeOptions {
  appTheme: any
  defaultLocale: string
  models: string[]
  pageTemplate: string
}

export interface GatsbyThemeConfig {
  options: ThemeOptions
  resolve: string
}
