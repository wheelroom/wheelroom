import { NcssProps } from '../../../elements/types'
import { textTreeStyle, TextTreeStyle } from '../../text/text-tree-style'

export interface PageSectionTextTreeStyle {
  container?: NcssProps
  text?: TextTreeStyle
  wrapper?: NcssProps
}

export const pageSectionTextTreeStyle: PageSectionTextTreeStyle = {
  container: {
    px: 3,
  },
  text: textTreeStyle,
  wrapper: {
    bg: 'bg',
  },
}
