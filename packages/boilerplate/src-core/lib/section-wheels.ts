import { StyledSystemTheme, StyledSystemConfig } from '@wheelroom/styled-system'
import { ElementStyles } from '../elements/types/element-styles'

/** Passed to a Wheelroom page section (wheel) */
export interface SectionWheels {
  styles: {
    [wheelId: string]: {
      [variation: string]: any
    }
  }
  elementStyles: ElementStyles
  themes: {
    [themeId: string]: StyledSystemTheme
  }
  defaultTheme: string
  styledSystemConfig: StyledSystemConfig
}
