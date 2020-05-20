import { NcssProps } from '../../types'

export interface HtmlElementStyle {
  ncss: NcssProps
}

export const htmlReset: HtmlElementStyle = {
  ncss: {
    boxSizing: 'border-box',
  },
}
