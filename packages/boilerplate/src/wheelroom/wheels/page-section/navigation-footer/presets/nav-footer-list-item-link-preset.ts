import { NcssProps } from '../../../types'

export interface NavFooterListItemLinkPreset {
  ncss: NcssProps
}

export const navFooterListItemLinkPreset: NavFooterListItemLinkPreset = {
  ncss: {
    label: 'link',
    cursor: 'pointer',
    '.active': { textDecoration: 'underline' },
    ':hover': { textDecoration: 'underline' },
    ':active': {},
    ':focus': {},
  },
}
