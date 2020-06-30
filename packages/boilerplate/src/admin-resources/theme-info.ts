import { ThemeInfo } from '@wheelroom/admin-theme-switcher'
import { PageModel } from '@wheelroom/core'
import { sectionWheels } from '../page-template/section-wheels'

export const themeInfo = (props: any): ThemeInfo => {
  const page: PageModel = props && props.data && props.data.page
  const pageThemeId = page && page.theme

  const themeIds = Object.keys(sectionWheels.themes)
  const themeInfo: ThemeInfo = {
    defaultThemeId: sectionWheels.defaultThemeId,
    pageThemeId,
    themes: {},
  }

  return themeIds.reduce((newThemeInfo: ThemeInfo, themeId: string) => {
    newThemeInfo.themes[themeId] = {
      themeName: sectionWheels.themes[themeId].themeName || '',
    }
    return newThemeInfo
  }, themeInfo)
}
