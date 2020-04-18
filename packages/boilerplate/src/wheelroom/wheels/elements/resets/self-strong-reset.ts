import { NcssProps } from '../../types'

export interface SelfStrongReset {
  ncss: NcssProps
}

export const selfStrongReset: SelfStrongReset = {
  ncss: {
    // Add the correct font weight in Chrome, Edge, and Safari.
    fontWeight: 'bolder',
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
