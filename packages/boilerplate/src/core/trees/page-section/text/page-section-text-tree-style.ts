import { TextTreeStyle } from '../../text/text-tree'
import { NcssProps } from '../../../elements/types'
import { textTreeStyle } from '../../text/text-tree-style'

export interface PageSectionTextTreeStyle {
  text: TextTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const pageSectionTextTreeStyle: PageSectionTextTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
  },
  container: {
    px: 3,
  },
  text: textTreeStyle,
}
