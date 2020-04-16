import { NcssProps } from '../types'

export interface ALinkPreset {
  ncss: NcssProps
}

export const aLinkPreset: ALinkPreset = {
  ncss: {
    /**
     * Remove the gray background on active links in IE 10.
     */
    bg: 'transparent',
    boxSizing: 'border-box',
    fontFamily: 'text',
    cursor: 'pointer',
    ':hover': {},
    ':visited': {},
    ':focus': {},
    ':active': {},
  },
}
