import { NcssProps } from '../types'

export interface ParagraphPreset {
  ncss: NcssProps
}

export const paragraphPreset: ParagraphPreset = {
  ncss: {
    label: 'paragraph',
    boxSizing: 'border-box',
    fontFamily: 'systemFont',
  },
}
