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
    display: 'flex',
    flexDirection: 'row',
    listPreset: 'none',
    flexWrap: 'wrap',
    my: 0,
    pl: 0,
  },
  listItem: navHeaderListItemPreset,
}
