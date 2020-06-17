import { NcssProps } from '../../lib/get-wheel'

export interface BlockquoteElementStyle {
  ncss: NcssProps
}

export const selfBlockquoteReset: BlockquoteElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
