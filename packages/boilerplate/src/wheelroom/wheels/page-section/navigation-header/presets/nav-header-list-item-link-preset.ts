import { NcssProps } from '../../../types'

export interface NavHeaderListItemLinkPreset {
  link: { ncss: NcssProps }
}

export const navHeaderListItemLinkPreset: NavHeaderListItemLinkPreset = {
  link: {
    ncss: {
      label: 'link',
      fontFamily: 'systemFont',
      fontSize: [3, 4],
      cursor: 'pointer',
      '.active': { textDecoration: 'underline' },
      ':hover': { textDecoration: 'underline' },
      ':active': {},
      ':focus': {},
    },
  },
}
