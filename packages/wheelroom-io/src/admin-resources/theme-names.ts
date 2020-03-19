import { ThemeNames } from '@wheelroom/admin-theme-switcher'

export const themeNames = (): ThemeNames => {
  const isServer = typeof window === 'undefined'
  const supportsDarkMode =
    !isServer &&
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

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
