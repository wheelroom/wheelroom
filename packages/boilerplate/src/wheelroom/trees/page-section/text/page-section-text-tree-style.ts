import { NcssProps } from '../../../elements/types'
import { textTreeStyle, TextTreeStyle } from '../../text/text-tree-style'

export interface PageSectionTextTreeStyle {
  text: TextTreeStyle
  wrapper: NcssProps
  container: NcssProps
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
