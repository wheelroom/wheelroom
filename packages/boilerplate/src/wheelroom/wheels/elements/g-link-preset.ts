import { NcssProps } from '../types'

export interface GLinkPreset {
  ncss: NcssProps
}

export const gLinkPreset: GLinkPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'systemFont',
    cursor: 'pointer',
    ':focus': {
      outline: '2px dotted',
      outlineOffset: '4px',
    },
    '&.active': {
      textDecoration: 'underline',
    },
  },
}
