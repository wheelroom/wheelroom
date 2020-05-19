import { NcssProps } from '../../../types'
import { IconElementStyle } from '../../../element/resets/icon-reset'

export interface NavFooterListItemLinkWheelStyle {
  ncss: NcssProps
  icon: IconElementStyle
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
  icon: {
    ncss: {
      label: 'nav-footer-list-item-icon',
      width: '16px',
      height: '16px',
      my: 'auto',
    },
  },
}
