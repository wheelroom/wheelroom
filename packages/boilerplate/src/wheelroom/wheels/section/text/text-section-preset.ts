import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { TextWheelStyle, textPreset } from '../../model/text/text-preset'

export interface TextSectionWheelStyle {
  container: GridElementStyle
  text: TextWheelStyle
  wrapper: GridElementStyle
}

export const textSectionPreset: TextSectionWheelStyle = {
  container: {
    ncss: {},
  },
  text: textPreset,
  wrapper: {
    ncss: {},
  },
}
