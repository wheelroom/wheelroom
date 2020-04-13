import { NcssProps } from '../../../types'
import {
  navHeaderListItemLinkPreset,
  NavHeaderListItemLinkPreset,
} from './nav-header-list-item-link-preset'

export interface NavHeaderListItemPreset {
  listItem: { ncss: NcssProps }
  link: NavHeaderListItemLinkPreset
}

export const navHeaderListItemPreset: NavHeaderListItemPreset = {
  listItem: {
    ncss: {
      label: 'list-item',
    },
  },
  link: navHeaderListItemLinkPreset,
}
