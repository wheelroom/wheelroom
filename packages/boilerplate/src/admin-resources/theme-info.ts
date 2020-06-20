import { ThemeInfo } from '@wheelroom/admin-theme-switcher'
import { PageProps } from '../../src-core'

export type ThemeId = 'yosemiteLight' | 'yosemiteDark'

export const themeInfo = (props: any): ThemeInfo => {
  const isServer = typeof window === 'undefined'
  const supportsDarkMode =
    !isServer &&
    // eslint-disable-next-line no-undef
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

  const defaultTheme = supportsDarkMode ? 'yosemiteDark' : 'yosemiteLight'

  const page: PageProps = props && props.data && props.data.page
  const pageTheme = page && page.theme

  return {
    pageTheme,
    themeNames: {
      yosemiteLight: {
        name: 'Light theme',
        default: defaultTheme === 'yosemiteLight',
      },
      yosemiteDark: {
        name: 'Dark theme',
        default: defaultTheme === 'yosemiteDark',
      },
    },
  }
}
