import { TextDisplayStyleTree } from '../../core/page-section-views/text-display'
import { textStyleTree } from './text-style-tree'

export const textDisplayStyleTree: TextDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
  },
  container: {
    px: 3,
  },
  text: textStyleTree,
}
