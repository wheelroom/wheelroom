import { NcssProps } from '../../../types'

export interface NavHeaderListItemLinkPreset {
  ncss: NcssProps
}

export const navHeaderListItemLinkPreset: NavHeaderListItemLinkPreset = {
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
