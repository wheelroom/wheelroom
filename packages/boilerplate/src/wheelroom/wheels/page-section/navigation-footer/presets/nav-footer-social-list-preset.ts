import { NcssProps } from '../../../types'
import { navFooterSocialListItemPreset } from './nav-footer-social-list-item-preset'

export interface NavFooterSocialListPreset {
  ncss: NcssProps
  listItem: NcssProps
}

export const navFooterSocialListPreset: NavFooterSocialListPreset = {
  ncss: {
    label: 'nav-footer-social-list',
    display: 'flex',
    flexDirection: 'row',
    SelfListRreset: 'none',
    flexWrap: 'wrap',
    my: 0,
    pl: 0,
  },
  listItem: navFooterSocialListItemPreset,
}
