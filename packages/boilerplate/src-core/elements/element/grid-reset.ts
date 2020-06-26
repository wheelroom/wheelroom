import { NcssNode } from '../../lib/ncss'

export const boxReset: NcssNode = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const flexReset: NcssNode = {
  ncss: {
    ...boxReset.ncss,
    display: 'flex',
  },
}

export const wrapperReset: NcssNode = {
  ncss: {
    ...boxReset.ncss,
    w: 1,
  },
}

export const fluidReset: NcssNode = {
  ncss: {
    ...flexReset.ncss,
    w: 1,
  },
}

export const containerReset: NcssNode = {
  ncss: {
    ...fluidReset.ncss,
    maxWidth: '1280px',
    mx: 'auto',
  },
}
