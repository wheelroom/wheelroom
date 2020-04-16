import { NcssProps } from '../../../types'

export interface NavHeaderListItemLinkPreset {
  ncss: NcssProps
}

export const navHeaderListItemLinkPreset: NavHeaderListItemLinkPreset = {
  ncss: {
    label: 'nav-header-list-item-link',
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
