import { ThemeInfo } from '@wheelroom/admin-theme-switcher'
import { PageProps } from '../models/page/page'

export type ThemeId = 'light' | 'dark'

export const themeInfo = (props: any): ThemeInfo => {
  const isServer = typeof window === 'undefined'
  const supportsDarkMode =
    !isServer &&
    // eslint-disable-next-line no-undef
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

  const defaultTheme = supportsDarkMode ? 'dark' : 'light'

  const page: PageProps = props && props.data && props.data.page
  const pageTheme = page && page.theme

  return {
    pageTheme,
    themeNames: {
      light: {
        name: 'Light theme',
        default: defaultTheme === 'light',
      },
      dark: {
        name: 'Dark theme',
        default: defaultTheme === 'dark',
      },
    },
  }
}
