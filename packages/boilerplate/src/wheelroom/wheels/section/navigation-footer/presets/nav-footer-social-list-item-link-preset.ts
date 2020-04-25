import { NcssProps } from '../../../types'
import { IconElementStyle } from '../../../element/resets/icon-reset'

export interface NavFooterSocialListItemLinkWheelStyle {
  ncss: NcssProps
  icon: IconElementStyle
}

export const navFooterSocialListItemLinkPreset: NavFooterSocialListItemLinkWheelStyle = {
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
      strokeWidth: '1.15px',
    },
  },
}
