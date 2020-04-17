import { NcssProps } from '../types'

export interface GridReset {
  ncss: NcssProps
}

export const boxReset: GridReset = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const flexReset: GridReset = {
  ncss: {
    ...boxReset.ncss,
    display: 'flex',
  },
}

export const wrapperReset: GridReset = {
  ncss: {
    ...boxReset.ncss,
    py: 3,
  },
}

export const containerReset: GridReset = {
  ncss: {
    ...flexReset.ncss,
    w: 1,
  },
}

export const containerMaxWidthReset: GridReset = {
  ncss: {
    ...containerReset.ncss,
    maxWidth: '1280px',
    mx: 'auto',
  },
}
