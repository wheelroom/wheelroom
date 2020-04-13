import { NcssProps } from '../types'

export interface ParagraphPreset {
  ncss: NcssProps
}

export const paragraphPreset: ParagraphPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'systemFont',
  },
}
