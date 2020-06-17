import { ElementStyles } from '../elements/types/element-styles'
import { StyledSystemConfig, StyledSystemTheme } from '../theme/types'
import { SectionWheels } from '../types/core-section-props'

export type NcssProps = any

/** Passed to a Wheelroom element or group of elements */
export interface Wheel {
  style: any
  elementStyles: ElementStyles
  theme: StyledSystemTheme
  styledSystemConfig: StyledSystemConfig
}

export interface GetWheel {
  sectionWheels: SectionWheels
  wheelId: string
  variation: string
  themeId: string
}

export const getWheel = (params: GetWheel): Wheel => {
  return {} as Wheel
}
