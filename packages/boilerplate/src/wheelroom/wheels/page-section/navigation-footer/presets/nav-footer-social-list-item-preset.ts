import { NcssProps } from '../../../types'
import {
  navFooterSocialListItemLinkPreset,
  NavFooterSocialListItemLinkPreset,
} from './nav-footer-social-list-item-link-preset'

export interface NavFooterSocialListItemPreset {
  ncss: NcssProps
  link: NavFooterSocialListItemLinkPreset
}

export const navFooterSocialListItemPreset: NavFooterSocialListItemPreset = {
  ncss: {
    label: 'nav-footer-social-list-item',
    display: 'inline-flex',
    my: 0,
    pl: 0,
  },
  link: navFooterSocialListItemLinkPreset,
}
