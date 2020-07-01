import { ElementResetNcssTree } from '../elements/element-reset-ncss-tree'
import { WrSystemTheme, WrSystemConfig } from '../theme/types'

/** Set of style trees */
export interface SectionWheelThemeStyles {
  [wheelId: string]: {
    [variation: string]: any
  }
}

/** Set of options */
export interface SectionWheelThemeOptions {
  [wheelId: string]: {
    [variation: string]: any
  }
}

/** Themes combine element styles, a set of style trees and a styled sytem theme */
export interface SectionWheelTheme {
  /** Base styling for each element */
  elementNcss: ElementResetNcssTree
  /** Specific styles for each wheel and wheel variations */
  styles: SectionWheelThemeStyles
  /** Specific options for each wheel and wheel variations */
  options: SectionWheelThemeOptions
  /** Public name of this theme */
  themeName?: string
  /** Styled system theme with space scales, colors, etc. */
  wrSystemTheme: WrSystemTheme
}

export interface SectionWheelThemes {
  [themeId: string]: SectionWheelTheme
}

/** Passed to a Wheelroom page section (wheel) */
export interface SectionWheels {
  /** Default theme for light mode */
  defaultThemeId: string
  /** Themes combine element styles, a set of style trees and a styled sytem theme */
  themes: SectionWheelThemes
  wrSystemConfig: WrSystemConfig
}
