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
    label: 'list-item',
  },
  link: navHeaderListItemLinkPreset,
}
