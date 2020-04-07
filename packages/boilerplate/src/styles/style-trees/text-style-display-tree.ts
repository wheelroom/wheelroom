import { TextTreeStyleTree } from '../../core/model-views/page-section/text-display'
import { textStyleTree } from './text-style-tree'

export const textDisplayStyleTree: TextTreeStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
  },
  container: {
    px: 3,
  },
  text: textStyleTree,
}
