/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { themeSwitcherRegister } from './theme-switcher-register'
import { themeSwitcherReducer } from './theme-switcher-reducer'
import { initialState } from './initial-state'
import { actionCreator } from './action-creator'
import { ThemeNames } from './types'
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
export const useInitThemeSwitcher = (themeNames: ThemeNames) => {
  const { adminCoreDispatch } = useContext(AdminCoreContext)
  initialState.themeNames = themeNames
  initialState.activeThemeId = getActiveTheme(themeNames)
  const [themeSwitcherState, themeSwitcherDispatch] = useReducer(
    themeSwitcherReducer,
    initialState
  )
  const actions = actionCreator(themeSwitcherState, themeSwitcherDispatch)

  useEffect(() => {
    // Register module only once
    adminCoreDispatch(themeSwitcherRegister)
  }, [])

  useEffect(() => {
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
