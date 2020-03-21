import { ThemeSwitcherState, ActionTypes } from './types'
import { Dispatch } from 'react'

export const actionCreator = (
  state: ThemeSwitcherState,
  dispatch: Dispatch<ActionTypes>
) => {
  // Set new theme and reset last theme
  const setActiveTheme = (themeId: string) => {
    dispatch({ type: 'SET_ACTIVE_THEME', themeId })
  }
  // Set new theme and save last theme
  const setTemporaryActiveTheme = (themeId: string) => {
    dispatch({ type: 'SET_TEMPORARY_ACTIVE_THEME', themeId })
  }
  // Set theme to last theme
  const setLastTheme = () => {
    dispatch({ type: 'SET_LAST_THEME' })
  }
  return {
    setActiveTheme,
    setLastTheme,
    setTemporaryActiveTheme,
  }
}
