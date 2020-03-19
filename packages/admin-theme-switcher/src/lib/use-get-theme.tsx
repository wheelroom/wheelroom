/* eslint-disable react-hooks/exhaustive-deps */
import { getThemeSwitcherStore } from './getters'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { useContext } from 'react'

export const useGetCurrentThemeId = () => {
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  return themeSwitcherStore?.state.activeThemeId
}
