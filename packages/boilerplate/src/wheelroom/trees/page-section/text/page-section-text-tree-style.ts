import { NcssProps } from '../../../elements/types'
import { textTreeStyle, TextTreeStyle } from '../../text/text-tree-style'

export interface PageSectionTextTreeStyle {
  container?: NcssProps
  text?: TextTreeStyle
  wrapper?: NcssProps
}

export const pageSectionTextTreeStyle: PageSectionTextTreeStyle = {
  wrapper: {
    bg: 'bg',
  },
  container: {
    px: 3,
  },
  text: textTreeStyle,
}
