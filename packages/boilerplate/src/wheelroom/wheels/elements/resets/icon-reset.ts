import { NcssProps } from '../../types'

export interface IconElementStyle {
  ncss: NcssProps
}

export const featherIconElementStyle: IconElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    w: '48px',
    h: '48px',
    strokeWidth: '1px',
  },
}

export const textIconElementStyle: IconElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontFamily: 'text',
  },
}
