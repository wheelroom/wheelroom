import { StyledSystemTheme, StyledSystemConfig } from '@wheelroom/styled-system'
import { ElementStyles } from './elements/types/element-styles'

export type NcssProps = any

export interface Wheel {
  style: any
  elementStyles: ElementStyles
  theme: StyledSystemTheme
  styledSystemConfig: StyledSystemConfig
}
