import { ThemeInfo } from '@wheelroom/admin-theme-switcher'
import { PageProps } from '../../src-core'
// import { sectionWheels } from '../page-template/section-wheels'

export const themeInfo = (props: any): ThemeInfo => {
  const page: PageProps = props && props.data && props.data.page
  const pageTheme = page && page.theme

  return {
    pageTheme,
    themeNames: {
      yosemiteLight: {
        name: 'Light theme',
        default: true,
      },
      yosemiteDark: {
        name: 'Dark theme',
        default: false,
      },
    },
  }
}
