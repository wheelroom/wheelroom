import { NcssProps } from '../../../types'

export interface NavFooterListItemLinkPreset {
  ncss: NcssProps
}

export const navFooterListItemLinkPreset: NavFooterListItemLinkPreset = {
  ncss: {
    label: 'link',
    fontFamily: 'text',
    fontSize: [3, 4],
    cursor: 'pointer',
    '.active': { textDecoration: 'underline' },
    ':hover': { textDecoration: 'underline' },
    ':active': {},
    ':focus': {},
  },
}
