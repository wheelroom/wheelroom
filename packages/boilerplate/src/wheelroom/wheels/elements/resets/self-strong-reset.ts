import { NcssProps } from '../../types'

export interface StrongElementStyle {
  ncss: NcssProps
}

export const selfStrongReset: StrongElementStyle = {
  ncss: {
    // Add the correct font weight in Chrome, Edge, and Safari.
    fontWeight: 'bolder',
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
