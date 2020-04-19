import { NcssProps } from '../../../types'

export interface NavFooterListItemLinkWheelStyle {
  ncss: NcssProps
}

export const navFooterListItemLinkPreset: NavFooterListItemLinkWheelStyle = {
  ncss: {
    label: 'nav-footer-list-item-link',
    display: 'inline-flex',
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
