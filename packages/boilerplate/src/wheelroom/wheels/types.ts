import { ElementStyles } from './element/types/element-styles'
import { StyledSystemTheme, StyledSystemConfig } from '../theme/types'

export type NcssProps = any

export interface Wheel {
  style: any
  elementStyles: ElementStyles
  theme: StyledSystemTheme
  styledSystemConfig: StyledSystemConfig
}
