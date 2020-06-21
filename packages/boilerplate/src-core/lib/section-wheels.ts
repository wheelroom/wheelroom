import { ElementStyles } from '../elements/types/element-styles'
import { WrSystemTheme, WrSystemConfig } from '../theme/types'

/** Set of style trees */
export interface SectionWheelThemeStyles {
  [wheelId: string]: {
    [variation: string]: any
  }
}

/** Themes combine element styles, a set of style trees and a styled sytem theme */
export interface SectionWheelTheme {
  /** Base styling for each element */
  elementStyles: ElementStyles
  /** Specific styles for each wheel and wheel variations */
  styles: SectionWheelThemeStyles
  /** Public name of this theme */
  themeName?: string
  /** Styled system theme with space scales, colors, etc. */
  wrSystemTheme: WrSystemTheme
}

/** Passed to a Wheelroom page section (wheel) */
export interface SectionWheels {
  /** Default theme for light mode */
  defaultThemeId: string
  /** Themes combine element styles, a set of style trees and a styled sytem theme */
  themes: {
    [themeId: string]: SectionWheelTheme
  }
  wrSystemConfig: WrSystemConfig
}
