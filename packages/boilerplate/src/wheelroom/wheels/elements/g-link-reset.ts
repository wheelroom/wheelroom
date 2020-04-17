import { NcssProps } from '../types'

export interface GLinkReset {
  ncss: NcssProps
}

export const gLinkReset: GLinkReset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
    cursor: 'pointer',
    ':hover': {},
    ':visited': {},
    ':focus': {},
    ':active': {},
    '&.active': {},
  },
}
