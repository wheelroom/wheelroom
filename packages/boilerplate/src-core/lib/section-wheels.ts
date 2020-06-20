import { StyledSystemConfig } from '@wheelroom/styled-system'
import { ElementStyles } from '../elements/types/element-styles'
import { WrSystemTheme } from '../theme/types'

/** Set of style trees */
export interface SectionWheelThemeStyles {
  [wheelId: string]: {
    [variation: string]: any
  }
}

/** Themes combine element styles, a set of style trees and a styled sytem theme */
export interface SectionWheelTheme {
  elementStyles: ElementStyles
  wrSystemTheme: WrSystemTheme
  styles: SectionWheelThemeStyles
}

/** Passed to a Wheelroom page section (wheel) */
export interface SectionWheels {
  /** Default theme */
  defaultThemeId: string
  /** Themes combine element styles, a set of style trees and a styled sytem theme */
  themes: {
    [themeId: string]: SectionWheelTheme
  }
  styledSystemConfig: StyledSystemConfig
}
