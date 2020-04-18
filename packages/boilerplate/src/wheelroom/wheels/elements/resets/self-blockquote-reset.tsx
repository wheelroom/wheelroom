import { NcssProps } from '../../types'

export interface BlockquoteElementStyle {
  ncss: NcssProps
}

export const selfBlockquoteReset: BlockquoteElementStyle = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}
