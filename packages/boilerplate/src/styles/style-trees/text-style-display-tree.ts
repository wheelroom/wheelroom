import { TextDisplayStyleTree } from '../../core/displays/text-display'
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
