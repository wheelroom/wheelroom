import { NcssProps } from '../../types'

export interface GLinkElementStyle {
  ncss: NcssProps
}

export const gLinkReset: GLinkElementStyle = {
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
