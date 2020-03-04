import { Dispatch } from 'react'

export interface ThemeName {
  /** Human readable name of the theme */
  name: string
  /** Use as default theme */
  default: boolean
}

export interface ThemeNames {
  [themeId: string]: ThemeName
}

export interface ThemeSwitcherState {
  /** Id of the active theme */
  activeThemeId: string | undefined
  /** List of avaibale themes */
  themeNames: ThemeNames
}

export interface BaseAction {
  type: string
}

export interface SetThemeNames extends BaseAction {
  type: 'SET_THEME_NAMES'
  themeNames: ThemeNames
}

export interface SetActiveTheme extends BaseAction {
  type: 'SET_ACTIVE_THEME'
  themeId: string
}

export type ActionTypes = SetThemeNames | SetActiveTheme

export interface ThemeSwitcherStore {
  actions: any
  state: ThemeSwitcherState
  dispatch: Dispatch<ActionTypes>
}
