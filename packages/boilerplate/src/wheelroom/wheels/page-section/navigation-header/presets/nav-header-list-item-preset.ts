import { NcssProps } from '../../../types'
import {
  navHeaderListItemLinkPreset,
  NavHeaderListItemLinkPreset,
} from './nav-header-list-item-link-preset'

export interface NavHeaderListItemPreset {
  ncss: NcssProps
  link: NavHeaderListItemLinkPreset
}

export const navHeaderListItemPreset: NavHeaderListItemPreset = {
  ncss: {
    label: 'nav-header-list-item',
    listStyle: 'none',
  },
  link: navHeaderListItemLinkPreset,
}
