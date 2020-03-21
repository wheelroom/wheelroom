import { ThemeNames } from '@wheelroom/admin-theme-switcher'
import { PageProps } from '../components/page'

export const themeNames = (props: any): ThemeNames => {
  const isServer = typeof window === 'undefined'
  const supportsDarkMode =
    !isServer &&
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

  let defaultTheme = supportsDarkMode ? 'dark' : 'light'

  const page: PageProps = props && props.data && props.data.page

  // If the page theme is set, make that the default
  if (page.theme) {
    defaultTheme = page.theme
  }

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
