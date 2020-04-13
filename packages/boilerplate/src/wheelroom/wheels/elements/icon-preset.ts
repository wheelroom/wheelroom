import { NcssProps } from '../types'

export interface IconPreset {
  ncss: NcssProps
}

export const featherIconPreset: IconPreset = {
  ncss: {},
}

export const textIconPreset: IconPreset = {
  ncss: {
    fontFamily: 'fontSystem',
  },
}
