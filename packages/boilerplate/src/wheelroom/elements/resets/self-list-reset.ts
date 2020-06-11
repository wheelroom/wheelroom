import { NcssProps } from '../../types/wheel'

export interface ListElementStyle {
  ncss: NcssProps
}

export const selfListReset: ListElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
