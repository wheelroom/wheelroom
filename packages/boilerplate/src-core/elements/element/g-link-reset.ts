import { GLinkElementStyle } from './g-link'

export const gLinkReset: GLinkElementStyle = {
  ncss: {
    // Remove the gray background on active links in IE 10.
    bg: 'transparent',
    boxSizing: 'border-box',
    cursor: 'pointer',
    fontFamily: 'text',
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
