import { ThemeSwitcherState, ActionTypes } from './types'
import { Dispatch } from 'react'

export const actionCreator = (
  state: ThemeSwitcherState,
  dispatch: Dispatch<ActionTypes>
) => {
  const setActiveTheme = (themeId: string) => {
    dispatch({ type: 'SET_ACTIVE_THEME', themeId })
  }
  return {
    setActiveTheme,
  }
}
