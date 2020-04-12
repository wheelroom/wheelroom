import {
  commonNavigationStyle,
  listStyle,
} from '../common/navigation-common-preset'
import { NcssProps } from '../../../types'
import { NavListTreeStyle } from '../common/nav-list'
import {
  NavSocialLinksTreeStyle,
  navSocialLinksPreset,
} from './nav-social-links-preset'
import { NavLegalTreeStyle, navLegalPreset } from './nav-legal-preset'

export interface PageSectionNavigationFooterPreset {
  wrapper: NcssProps
  container: NcssProps
  menus: {
    nav: NcssProps
    navList: NavListTreeStyle
    navSocialLinks: NavSocialLinksTreeStyle
  }
  navLegal: NavLegalTreeStyle
}

export const navigationFooterTreeStyle: PageSectionNavigationFooterPreset = {
  wrapper: {
    bg: 'bg',
  },
  container: {
    borderTop: '1px solid transparent',
    borderColor: 'border',
    px: 3,
  },

  menus: {
    nav: {
      h: '84px',
      flex: 1,
      justifyContent: ['space-evenly', 'space-between'],
      flexDirection: ['column', 'row'],
      alignItems: 'center',
    },
    navList: {
      list: listStyle,
      listItem: {
        linkStyle: {
          ...commonNavigationStyle,
          m: 0,
          ml: [2, 0],
          mr: [2, 3],
        },
      },
    },
    navSocialLinks: navSocialLinksPreset,
  },
  navLegal: navLegalPreset,
}
