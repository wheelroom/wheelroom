import { NcssProps } from '../../../types'

export interface NavHeaderListItemLinkPreset {
  ncss: NcssProps
}

export const navHeaderListItemLinkPreset: NavHeaderListItemLinkPreset = {
  ncss: {
    label: 'link',
    cursor: 'pointer',
    '.active': { textDecoration: 'underline' },
    ':hover': { textDecoration: 'underline' },
    ':active': {},
    ':focus': {},
  },
}
