import { NcssProps } from '../types'

export interface IconPreset {
  ncss: NcssProps
}

export const featherIconPreset: IconPreset = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const textIconPreset: IconPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
