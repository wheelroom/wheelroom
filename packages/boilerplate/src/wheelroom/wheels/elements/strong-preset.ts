import { NcssProps } from '../types'

export interface StrongPreset {
  ncss: NcssProps
}

export const strongPreset: StrongPreset = {
  ncss: {
    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */
    fontWeight: 'bolder',
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
