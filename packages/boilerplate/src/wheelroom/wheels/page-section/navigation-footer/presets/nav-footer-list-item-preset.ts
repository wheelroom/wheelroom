import { NcssProps } from '../../../types'
import {
  navFooterListItemLinkPreset,
  NavFooterListItemLinkPreset,
} from './nav-footer-list-item-link-preset'

export interface NavFooterListItemPreset {
  ncss: NcssProps
  link: NavFooterListItemLinkPreset
}

export const navFooterListItemPreset: NavFooterListItemPreset = {
  ncss: {
    label: 'list-item',
  },
  link: navFooterListItemLinkPreset,
}
