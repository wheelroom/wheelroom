import { NcssProps } from '../../lib/get-wheel'

export interface TimeElementStyle {
  ncss: NcssProps
}

export const selfTimeReset: TimeElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
