import { NcssProps } from '../types'

export interface AnyPreset {
  ncss: NcssProps
}

export const anyPreset: AnyPreset = {
  ncss: {
    boxSizing: 'border-box',
  },
}
