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
    copyright: `© Copyright ${new Date().getFullYear()} Wheelroom Foundation. All rights reserved.`,
    hideCopyright: false,
    hideLegalFooter: false,
    hideMenu: false,
    hideSocial: false,
    // Thanks for using Wheelroom! We appreciate your support.
    supportWheelroom: true,
  },
  sitemap: {
    headingElementName: 'h4',
    hideMenu: false,
    hideSegmentHeading: false,
  },
}
