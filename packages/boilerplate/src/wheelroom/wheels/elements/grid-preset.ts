import { NcssProps } from '../types'

export interface GridPreset {
  ncss: NcssProps
}

export const boxPreset: GridPreset = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const flexPreset: GridPreset = {
  ncss: {
    ...boxPreset.ncss,
    display: 'flex',
  },
}

export const wrapperPreset: GridPreset = {
  ncss: {
    ...boxPreset.ncss,
    py: [3, 4, 5],
  },
}

export const containerPreset: GridPreset = {
  ncss: {
    ...flexPreset.ncss,
    w: 1,
  },
}

export const containerMaxWidthPreset: GridPreset = {
  ncss: {
    ...containerPreset.ncss,
    maxWidth: '1280px',
    mx: 'auto',
  },
}
