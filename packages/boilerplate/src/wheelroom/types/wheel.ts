import { ElementStyles } from '../elements/types/element-styles'
import { StyledSystemConfig, StyledSystemTheme } from '../theme/types'

export type NcssProps = any

export interface Wheel {
  style: any
  elementStyles: ElementStyles
  theme: StyledSystemTheme
  styledSystemConfig: StyledSystemConfig
}
