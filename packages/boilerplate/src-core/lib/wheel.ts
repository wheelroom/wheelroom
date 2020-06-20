import { ElementStyles } from '../elements/types/element-styles'
import { WrSystemConfig, WrSystemTheme } from '../theme/types'

/** Passed to a Wheelroom element or group of elements */
export interface Wheel {
  style: any
  elementStyles: ElementStyles
  theme: WrSystemTheme
  wrSystemConfig: WrSystemConfig
}
