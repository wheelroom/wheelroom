import { ElementStyles } from '../elements/types/element-styles'
import { StyledSystemConfig, WrSystemTheme } from '../theme/types'

/** Passed to a Wheelroom element or group of elements */
export interface Wheel {
  style: any
  elementStyles: ElementStyles
  theme: WrSystemTheme
  styledSystemConfig: StyledSystemConfig
}
