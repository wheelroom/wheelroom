import { ThemeNames } from '@wheelroom/admin-theme-switcher'

export const themeNames = (): ThemeNames => {
  const isServer = typeof window === 'undefined'
  const supportsDarkMode =
    !isServer &&
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

  const defaultTheme = supportsDarkMode ? 'dark' : 'light'

  return {
    light: {
      name: 'Light theme',
      default: defaultTheme === 'light',
    },
    dark: {
      name: 'Dark theme',
      default: defaultTheme === 'dark',
    },
  }
}
