import { NcssProps } from '../../types'

export interface ButtonElementStyle {
  ncss: NcssProps
}

export const buttonReset: ButtonElementStyle = {
  ncss: {
    // Correct the inability to style clickable types in iOS and Safari.
    WebkitAppearance: 'button',
    // Remove the inheritance of text transform in Edge, Firefox, and IE.
    // 1. Remove the inheritance of text transform in Firefox.
    textTransform: 'none', // 1
    // Show the overflow in IE.
    // 1. Show the overflow in Edge.
    overflow: 'visible', // 1
    // 1. Change the font styles in all browsers.
    // 2. Remove the margin in Firefox and Safari.
    fontFamily: 'text', // 1
    fontSize: '100%', // 1
    lineHeight: '1.15', // 1
    m: 0, // 2
    boxSizing: 'border-box',
    textDecoration: 'none',
    userSelect: 'none',
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
  },
}
