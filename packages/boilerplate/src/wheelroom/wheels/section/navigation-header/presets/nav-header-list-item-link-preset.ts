import { NcssProps } from '../../../types'

export interface NavHeaderListItemLinkWheelStyle {
  ncss: NcssProps
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
}
