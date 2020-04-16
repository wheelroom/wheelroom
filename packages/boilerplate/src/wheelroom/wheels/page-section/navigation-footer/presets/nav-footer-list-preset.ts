import { NcssProps } from '../../../types'
import {
  NavFooterListItemPreset,
  navFooterListItemPreset,
} from './nav-footer-list-item-preset'

export interface NavFooterListPreset {
  ncss: NcssProps
  listItem: NavFooterListItemPreset
}

export const navFooterListPreset: NavFooterListPreset = {
  ncss: {
    display: 'flex',
    flexDirection: 'row',
    listPreset: 'none',
    flexWrap: 'wrap',
    my: 0,
    pl: 0,
  },
  listItem: navFooterListItemPreset,
}
