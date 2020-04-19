import { NcssProps } from '../../types'

export interface GridElementStyle {
  ncss: NcssProps
}

export const boxReset: GridElementStyle = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const flexReset: GridElementStyle = {
  ncss: {
    ...boxReset.ncss,
    display: 'flex',
  },
}

export const wrapperReset: GridElementStyle = {
  ncss: {
    ...boxReset.ncss,
    py: 3,
  },
}

export const containerReset: GridElementStyle = {
  ncss: {
    ...flexReset.ncss,
    w: 1,
  },
}

export const containerMaxWidthReset: GridElementStyle = {
  ncss: {
    ...containerReset.ncss,
    maxWidth: '1280px',
    mx: 'auto',
  },
}
