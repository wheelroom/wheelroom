import { NcssProps } from '../types'

export interface IconPreset {
  ncss: NcssProps
}

export const featherIconPreset: IconPreset = {
  ncss: {
    label: 'feather-icon',
  },
}

export const textIconPreset: IconPreset = {
  ncss: {
    label: 'text-icon',
    fontFamily: 'fontSystem',
  },
}
