import { NcssProps } from '../../../elements/types'
import { textTreeStyle, TextPresetStyle } from '../../text/text-preset-style'

export interface PageSectionTextPresetStyle {
  container?: NcssProps
  text?: TextPresetStyle
  wrapper?: NcssProps
}

export const pageSectionTextTreeStyle: PageSectionTextPresetStyle = {
  container: {
    ncss: {},
  },
  text: textTreeStyle,
  wrapper: {
    ncss: {
      label: 'wrapper',
    },
  },
}
