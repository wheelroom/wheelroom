import { NcssProps } from '../../types'

export interface TableElementStyle {
  ncss: NcssProps
}

export const selfTableReset: TableElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

export const selfTdReset: TableElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

export const selfTrReset: TableElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
