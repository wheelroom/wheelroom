import { NcssProps } from '../types'

export interface HrPreset {
  ncss: NcssProps
}

export const hrPreset: HrPreset = {
  ncss: {
    /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */
    boxSizing: 'border-box' /* 1 */,
    height: '0' /* 1 */,
    overflow: 'visible' /* 2 */,
  },
}
