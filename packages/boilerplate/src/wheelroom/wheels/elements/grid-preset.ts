import { NcssProps } from '../types'

export interface GridPreset {
  ncss: NcssProps
}

export const boxPreset: GridPreset = {
  ncss: {
    label: 'box',
    boxSizing: 'border-box',
  },
}

export const flexPreset: GridPreset = {
  ncss: {
    ...boxPreset,
    label: 'flex',
    display: 'flex',
  },
}

export const containerPreset: GridPreset = {
  ncss: {
    ...flexPreset,
    label: 'container-fluid',
    w: 1,
  },
}

export const containerMaxWidthPreset: GridPreset = {
  ncss: {
    ...containerPreset,
    label: 'container-max-width',
    maxWidth: '1280px',
    mx: 'auto',
  },
}
