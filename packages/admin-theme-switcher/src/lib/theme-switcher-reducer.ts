import { ActionTypes, ThemeSwitcherState } from './types'
import { getActiveTheme } from './getters'

export const themeSwitcherReducer = (
  state: ThemeSwitcherState,
  action: ActionTypes
): ThemeSwitcherState => {
  switch (action.type) {
    case 'SET_THEME_NAMES':
      const activeThemeId = getActiveTheme(action.themeNames)
      return {
        ...state,
        themeNames: action.themeNames,
        activeThemeId,
      }

    case 'SET_ACTIVE_THEME':
      return { ...state, activeThemeId: action.themeId }

    default:
      throw new Error()
  }
}
