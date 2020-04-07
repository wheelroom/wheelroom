import { PageSectionTextTreeStyle } from './page-section-text-tree'
import { textStyleTree } from '../text/text-tree-style'

export const textTreeStyle: PageSectionTextTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
  },
  container: {
    px: 3,
  },
  text: textStyleTree,
}
