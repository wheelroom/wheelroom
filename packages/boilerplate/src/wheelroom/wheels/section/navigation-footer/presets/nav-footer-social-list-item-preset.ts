import { NcssProps } from '../../../types'
import {
  NavFooterSocialListItemLinkWheelStyle,
  navFooterSocialListItemLinkPreset,
} from './nav-footer-social-list-item-link-preset'

export interface NavFooterSocialListItemWheelStyle {
  ncss: NcssProps
  link: NavFooterSocialListItemLinkWheelStyle
}

export const navFooterSocialListItemPreset: NavFooterSocialListItemWheelStyle = {
  ncss: {
    label: 'nav-footer-social-list-item',
    display: 'inline-flex',
    my: 0,
    pl: 0,
  },
  link: navFooterSocialListItemLinkPreset,
}
