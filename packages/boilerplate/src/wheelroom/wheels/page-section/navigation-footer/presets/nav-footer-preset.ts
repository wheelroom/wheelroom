import {
  NavSocialLinksPreset,
  navSocialLinksPreset,
} from './nav-social-links-preset'
import { NavLegalPreset, navLegalPreset } from './nav-legal-preset'
import { NcssProps } from '../../../types'
import { NavListPreset, navListPreset } from './nav-list-preset'

export interface NavFooterPreset {
  wrapper: { ncss: NcssProps }
  container: { ncss: NcssProps }
  menus: {
    nav: { ncss: NcssProps }
    navList: NavListPreset
    navSocialLinks: NavSocialLinksPreset
  }
  navLegal: NavLegalPreset
}

export const navFooterPreset: NavFooterPreset = {
  wrapper: {
    ncss: {
      bg: 'bg',
    },
  },
  container: {
    ncss: {
      borderTop: '1px solid transparent',
      borderColor: 'border',
      px: 3,
    },
  },

  menus: {
    nav: {
      ncss: {
        h: '84px',
        flex: 1,
        justifyContent: ['space-evenly', 'space-between'],
        flexDirection: ['column', 'row'],
        alignItems: 'center',
      },
    },
    navList: {
      list: navListPreset.list,
      item: {
        ncss: {
          ...navListPreset.item.ncss,
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
