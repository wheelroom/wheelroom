import { NcssProps } from '../../../types'
import { navFooterSocialListItemPreset } from './nav-footer-social-list-item-preset'

export interface NavFooterSocialListWheelStyle {
  ncss: NcssProps
  listItem: NcssProps
}

export const navFooterSocialListPreset: NavFooterSocialListWheelStyle = {
  ncss: {
    label: 'nav-footer-social-list',
    display: 'flex',
    flexDirection: 'row',
    ListElementStyle: 'none',
    flexWrap: 'wrap',
    my: 0,
    pl: 0,
  },
  listItem: navFooterSocialListItemPreset,
}
