import { NcssProps } from '../../elements/types'
import { textTreeStyle, TextPreset } from '../../text/text-preset'

export interface PageSectionTextPreset {
  container?: NcssProps
  text?: TextPreset
  wrapper?: NcssProps
}

export const pageSectionTextTreeStyle: PageSectionTextPreset = {
  container: {
    ncss: {},
  },
  text: textTreeStyle,
  wrapper: {
    ncss: {
      label: 'wrapper',
      py: 3,
    },
  },
}
