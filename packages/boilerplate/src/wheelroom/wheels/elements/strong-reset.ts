import { NcssProps } from '../types'

export interface StrongReset {
  ncss: NcssProps
}

export const strongReset: StrongReset = {
  ncss: {
    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */
    fontWeight: 'bolder',
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
