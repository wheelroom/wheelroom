import { ElementNcssTree } from '../elements/types/element-ncss-tree'
import { WrSystemConfig, WrSystemTheme } from '../theme/types'

/** Passed to a Wheelroom element or group of elements */
export interface Wheel {
  style: any
  elementNcss: ElementNcssTree
  wrSystemTheme: WrSystemTheme
  wrSystemConfig: WrSystemConfig
}
