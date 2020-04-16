import { NcssProps } from '../types'

export interface BlockquotePreset {
  ncss: NcssProps
}

export const blockquotePreset: BlockquotePreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
