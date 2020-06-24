import { NcssObjectProps } from '../../lib/ncss'

export const boxReset: NcssObjectProps = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const flexReset: NcssObjectProps = {
  ncss: {
    ...boxReset.ncss,
    display: 'flex',
  },
}

export const wrapperReset: NcssObjectProps = {
  ncss: {
    ...boxReset.ncss,
    w: 1,
  },
}

export const fluidReset: NcssObjectProps = {
  ncss: {
    ...flexReset.ncss,
    w: 1,
  },
}

export const containerReset: NcssObjectProps = {
  ncss: {
    ...fluidReset.ncss,
    maxWidth: '1280px',
    mx: 'auto',
  },
}
