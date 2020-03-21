/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useReducer, useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { themeSwitcherRegister } from './theme-switcher-register'
import { themeSwitcherReducer } from './theme-switcher-reducer'
import { initialState } from './initial-state'
import { actionCreator } from './action-creator'
import { ThemeInfo } from './types'
import { getActiveTheme } from './getters'

/**
 * Use init theme switcher
 *
 * The main entry point for this admin module. This is used in an element
 * wrapped around each page. What is does:
 *
 * - register a React reducer
 * - save the reducer ito the admin core store
 * - on reducer state change, dispatch SET_LAST_MODULE_ID to the core store
 *
 */
export const useInitThemeSwitcher = (themeInfo: ThemeInfo) => {
  const { adminCoreDispatch } = useContext(AdminCoreContext)
  initialState.themeNames = themeInfo.themeNames
  initialState.activeThemeId = getActiveTheme(themeInfo.themeNames)
  initialState.lastThemeId = initialState.activeThemeId
  const [themeSwitcherState, themeSwitcherDispatch] = useReducer(
    themeSwitcherReducer,
    initialState
  )
  const actions = actionCreator(themeSwitcherState, themeSwitcherDispatch)

  /**
   * When page as a theme, temporary switch to this new theme. Save the current
   * theme as the last theme. If no page theme is set, check if switching back
   * to the last theme is needed.
   */
  useLayoutEffect(() => {
    if (themeInfo.pageTheme) {
      actions.setTemporaryActiveTheme(themeInfo.pageTheme)
    } else {
      actions.setLastTheme()
    }
  }, [themeInfo.pageTheme])

  /**
   * Register module only once
   */
  useEffect(() => {
    adminCoreDispatch(themeSwitcherRegister)
  }, [])

  /**
   * When the state if this module changes, commuicate changes with the main
   * admin module
   */
  useLayoutEffect(() => {
    adminCoreDispatch({
      type: 'SET_ADMIN_MODULE_STORE',
      moduleId: themeSwitcherRegister.moduleId,
      store: {
        actions,
        state: themeSwitcherState,
        dispatch: themeSwitcherDispatch,
      },
    })
    adminCoreDispatch({
      type: 'SET_LAST_MODULE_ID',
      moduleId: themeSwitcherRegister.moduleId,
    })
  }, [themeSwitcherState])
}
