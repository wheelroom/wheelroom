import { NcssProps } from '../../../types'
import {
  NavHeaderListItemPreset,
  navHeaderListItemPreset,
} from './nav-header-list-item-preset'

export interface NavHeaderListPreset {
  ncss: NcssProps
  listItem: NavHeaderListItemPreset
}

export const navHeaderListPreset: NavHeaderListPreset = {
  ncss: {
    label: 'nav-header-list',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    my: 0,
    pl: 0,
  },
  listItem: navHeaderListItemPreset,
}
