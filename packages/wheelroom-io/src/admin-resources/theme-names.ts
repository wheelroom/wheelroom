import { ThemeNames } from '@jacco-meijer/admin-theme-switcher'

export const themeNames = (): ThemeNames => {
  const supportsDarkMode =
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

  console.log('supportsDarkMode', supportsDarkMode)
  return {
    light: {
      name: 'Light theme',
      default: supportsDarkMode ? false : true,
    },
    dark: {
      name: 'Dark theme',
      default: supportsDarkMode ? true : false,
    },
  }
}
