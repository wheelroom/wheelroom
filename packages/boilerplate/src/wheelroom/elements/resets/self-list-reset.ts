import { NcssProps } from '../../lib/get-wheel'

export interface ListElementStyle {
  ncss: NcssProps
}

export const selfListReset: ListElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
