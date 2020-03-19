import { AdminCoreState } from '@wheelroom/admin-core'
import { ThemeSwitcherStore, ThemeNames } from './types'

export const getThemeSwitcherStore = (
  adminCoreState: AdminCoreState
): ThemeSwitcherStore | undefined => {
  if (!adminCoreState || !('themeSwitcher' in adminCoreState.modules)) {
    return
  }
  const themeSwitcher = adminCoreState.modules.themeSwitcher
  if (!themeSwitcher.store) {
    return
  }
  return themeSwitcher.store
}

export const getActiveTheme = (themeNames: ThemeNames): string => {
  return (
    Object.keys(themeNames).filter(
      (key: string) => themeNames[key].default
    )[0] || ''
  )
}
