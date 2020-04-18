import { NcssProps } from '../../types'

export interface IconReset {
  ncss: NcssProps
}

export const featherIconReset: IconReset = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    w: '48px',
    h: '48px',
    strokeWidth: '1px',
  },
}

export const textIconReset: IconReset = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontFamily: 'text',
  },
}
