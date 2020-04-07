import { TextTreeStyle } from '../../../core/trees/page-section/text-tree'
import { textStyleTree } from '../../../core/trees/page-section/text-style-tree'

export const textTreeStyle: TextTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
  },
  container: {
    px: 3,
  },
  text: textStyleTree,
}
