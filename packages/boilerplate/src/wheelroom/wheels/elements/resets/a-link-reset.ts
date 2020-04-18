import { NcssProps } from '../../types'

export interface ALinkReset {
  ncss: NcssProps
}

export const aLinkReset: ALinkReset = {
  ncss: {
    // Remove the gray background on active links in IE 10.
    bg: 'transparent',
    boxSizing: 'border-box',
    cursor: 'pointer',
    fontFamily: 'text',
    ':hover': {},
    ':visited': {},
    ':focus': {},
    ':active': {},
  },
}
