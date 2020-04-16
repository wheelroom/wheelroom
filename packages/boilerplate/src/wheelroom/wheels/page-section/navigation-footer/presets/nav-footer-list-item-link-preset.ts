import { NcssProps } from '../../../types'

export interface NavFooterListItemLinkPreset {
  ncss: NcssProps
}

export const navFooterListItemLinkPreset: NavFooterListItemLinkPreset = {
  ncss: {
    label: 'nav-footer-list-item-link',
    px: 2,
    py: 3,
    textDecoration: 'none',
    cursor: 'pointer',
    '&.active': { textDecoration: 'underline' },
    ':hover': { textDecoration: 'underline' },
    ':active': {},
    ':focus': {},
    ':visited': {},
  },
}
