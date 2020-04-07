import { PageSectionTextTreeStyle } from '../../../core/trees/page-section/page-section-text-tree'
import { textStyleTree } from '../../../core/trees/text/text-tree-style'

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
