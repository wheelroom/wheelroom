import { GridElementStyle } from '../../elements/resets/grid-reset'
import { TextWheelStyle, textPreset } from '../../text/text-preset'

export interface FreestyleWheelStyle {
  container: GridElementStyle
  text: TextWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionFreestylePreset: FreestyleWheelStyle = {
  container: {
    ncss: {},
  },
  text: textPreset,
  wrapper: {
    ncss: {},
  },
}
