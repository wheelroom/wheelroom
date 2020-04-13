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
    ...boxPreset,
    display: 'flex',
  },
}

export const containerPreset: GridPreset = {
  ncss: {
    ...flexPreset,
    w: 1,
  },
}

export const containerMaxWidthPreset: GridPreset = {
  ncss: {
    ...containerPreset,
    maxWidth: '1280px',
    mx: 'auto',
  },
}
