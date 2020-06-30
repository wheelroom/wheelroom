import { ElementResetNcssTree } from '../elements/element-reset-ncss-tree'
import { WrSystemConfig, WrSystemTheme } from '../theme/types'

/** Passed to a Wheelroom element or group of elements */
export interface Wheel {
  style: any
  elementNcss: ElementResetNcssTree
  wrSystemTheme: WrSystemTheme
  wrSystemConfig: WrSystemConfig
}
