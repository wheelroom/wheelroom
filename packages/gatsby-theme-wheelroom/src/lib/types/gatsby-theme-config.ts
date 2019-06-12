export interface ThemeOptions {
  defaultLocale: string
  componentTypes: string[]
  pageTemplate: string
}

export interface GatsbyThemeConfig {
  options: ThemeOptions
  resolve: string
}
