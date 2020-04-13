import { NcssProps } from '../types'

export interface ListPreset {
  ncss: NcssProps
}

export const listPreset: ListPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'fontSystem',
  },
}
