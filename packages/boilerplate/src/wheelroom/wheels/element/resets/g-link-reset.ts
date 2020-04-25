import { NcssProps } from '../../types'

export interface GLinkElementStyle {
  ncss: NcssProps
}

export const gLinkReset: GLinkElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
    cursor: 'pointer',
    '&:hover': {},
    '&:visited': {},
    '&:focus': {
      outlineColor: 'black',
      outlineOffset: 4,
      outlineWidth: 2,
      outlineStyle: 'dotted',
    },
    '&:active': {},
    '&.active': {},
  },
}
