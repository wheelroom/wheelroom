import { GridElementStyle } from '../../element/resets/grid-reset'
import { TextWheelStyle, textPreset } from '../../model/text/text-preset'

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
