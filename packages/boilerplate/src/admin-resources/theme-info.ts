import { ThemeInfo } from '@wheelroom/admin-theme-switcher'
import { PageProps } from '../../src-core'
import { sectionWheels } from '../page-template/section-wheels'

export const themeInfo = (props: any): ThemeInfo => {
  const page: PageProps = props && props.data && props.data.page
  const pageThemeId = page && page.theme

  const themeIds = Object.keys(sectionWheels.themes)
  const themeInfo = themeIds.reduce(
    (newThemeInfo: ThemeInfo, themeId: string) => {
      newThemeInfo.themes[themeId] = {
        themeName: sectionWheels.themes[themeId].themeName || '',
      }
      return newThemeInfo
    },
    {
      defaultThemeId: sectionWheels.defaultThemeId,
      pageThemeId,
      themes: {},
    } as ThemeInfo
  )

  return themeInfo
}
