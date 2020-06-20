import { GridElementStyle } from '../../../../src-core'
import { TextWheelStyle, textPreset } from '../../text/text-preset'

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
