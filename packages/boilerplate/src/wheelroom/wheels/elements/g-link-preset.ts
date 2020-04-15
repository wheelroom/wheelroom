import { NcssProps } from '../types'

export interface GLinkPreset {
  ncss: NcssProps
}

export const gLinkPreset: GLinkPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
    cursor: 'pointer',
    ':hover': {},
    ':visited': {},
    ':focus': {},
    '&.active': {},
  },
}
