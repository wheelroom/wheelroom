import { ElementResetNcssTree } from '../elements/element-reset-ncss-tree'
import { WrSystemTheme, WrSystemConfig } from '../theme/types'
import { Wheel } from './wheel'

/** A single wheel extracted from SectionWheels */
export interface SectionWheel {
  data: any
  wheel: Wheel
}

/** Set of style trees */
export interface SectionWheelThemeStyles {
  [wheelId: string]: {
    [variation: string]: any
  }
}

/** Set of data */
export interface SectionWheelThemeData {
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
  /** Specific data for each wheel and wheel variations */
  data: SectionWheelThemeData
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
