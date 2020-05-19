import { NcssProps } from '../../../types'
import { IconElementStyle } from '../../../element/resets/icon-reset'

export interface NavHeaderListItemLinkWheelStyle {
  ncss: NcssProps
  icon: IconElementStyle
}

export const navHeaderListItemLinkPreset: NavHeaderListItemLinkWheelStyle = {
  ncss: {
    label: 'nav-header-list-item-link',
    display: 'inline-flex',
    px: 2,
    py: 3,
    textDecoration: 'none',
    cursor: 'pointer',
    '&.active': { textDecoration: 'underline' },
    '&:hover': { textDecoration: 'underline' },
  },
  icon: {
    ncss: {
      label: 'nav-header-list-item-icon',
      width: '16px',
      height: '16px',
      my: 'auto',
    },
  },
}
