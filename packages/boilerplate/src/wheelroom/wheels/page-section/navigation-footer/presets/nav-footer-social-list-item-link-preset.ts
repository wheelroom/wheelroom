import { NcssProps } from '../../../types'
import { IconReset } from '../../../elements/resets/icon-reset'

export interface NavFooterSocialListItemLinkPreset {
  ncss: NcssProps
  icon: IconReset
}

export const navFooterSocialListItemLinkPreset: NavFooterSocialListItemLinkPreset = {
  ncss: {
    label: 'nav-footer-social-link',
    display: 'inline-flex',
    px: 2,
    py: 3,
  },
  icon: {
    ncss: {
      label: 'nav-footer-social-icon',
      width: '20px',
      height: '20px',
      strokeWidth: '1px',
    },
  },
}
