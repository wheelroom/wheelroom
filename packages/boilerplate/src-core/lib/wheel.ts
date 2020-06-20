import { ElementStyles } from '../elements/types/element-styles'
import { StyledSystemConfig, StyledSystemTheme } from '../theme/types'

/** Passed to a Wheelroom element or group of elements */
export interface Wheel {
  style: any
  elementStyles: ElementStyles
  theme: StyledSystemTheme
  styledSystemConfig: StyledSystemConfig
}
