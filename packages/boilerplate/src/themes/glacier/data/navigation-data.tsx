import { DeepPartial } from '@wheelroom/core'
import { NavigationSectionData } from '@wheelroom/wheel-navigation'

export const navigationSectionData: DeepPartial<NavigationSectionData> = {
  header: {
    hideActions: false,
    hideBranding: false,
    hideMenu: false,
    hideModal: false,
    hideSkipToContent: false,
    hideThemeButton: false,
    /**
     * Example:
     * import React from 'react
     * useLogoElement: <img src={'images/logo.png'} width={50} height={50} />,
     */
    useLogoElement: undefined,
  },
  footer: {
    hideLegalFooter: false,
    hideMenu: false,
    hideSocial: false,
  },
}
