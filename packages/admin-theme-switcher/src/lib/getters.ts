import { AdminCoreState } from '@wheelroom/admin-core'
import { ThemeSwitcherStore } from './types'

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
