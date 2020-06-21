import { Dispatch } from 'react'

export interface Theme {
  /** Human readable name of the theme */
  themeName: string
}

export interface Themes {
  [themeId: string]: Theme
}

export interface ThemeInfo {
  defaultThemeId: string
  pageThemeId: string | undefined
  themes: Themes
}

export interface ThemeSwitcherState {
  /** Id of the active theme */
  activeThemeId: string | undefined
  /** Id of the last theme before the active theme */
  lastThemeId: string | undefined
  /** List of avaibale themes */
  themes: Themes
}

export interface BaseAction {
  type: string
}

export interface SetActiveTheme extends BaseAction {
  type: 'SET_ACTIVE_THEME'
  themeId: string
}

export interface SetTemporaryActiveTheme extends BaseAction {
  type: 'SET_TEMPORARY_ACTIVE_THEME'
  themeId: string
}

export interface SetLastTheme extends BaseAction {
  type: 'SET_LAST_THEME'
}

export type ActionTypes =
  | SetActiveTheme
  | SetLastTheme
  | SetTemporaryActiveTheme

export interface ThemeSwitcherStore {
  actions: any
  state: ThemeSwitcherState
  dispatch: Dispatch<ActionTypes>
}
