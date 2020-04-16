import { NcssProps } from '../types'

export interface PrePreset {
  ncss: NcssProps
}

export const prePreset: PrePreset = {
  ncss: {
    /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd `em` font sizing in all browsers.
     */
    boxSizing: 'border-box',
    fontFamily: 'monospace, monospace' /* 1 */,
    fontSize: '1em' /* 2 */,
  },
}
