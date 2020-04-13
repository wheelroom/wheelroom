import {
  NavFooterSocialLinksPreset,
  navFooterSocialLinksPreset,
} from './nav-footer-social-links-preset'
import { NavFooterLegalPreset, navLegalPreset } from './nav-footer-legal-preset'
import { NcssProps } from '../../../types'
import { NavFooterListPreset, navListPreset } from './nav-footer-list-preset'

export interface NavFooterPreset {
  wrapper: { ncss: NcssProps }
  container: { ncss: NcssProps }
  nav: { ncss: NcssProps }
  navList: NavFooterListPreset
  navSocialLinks: NavFooterSocialLinksPreset
  navLegal: NavFooterLegalPreset
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
    ncss: navListPreset,
    listItem: {
      ncss: {
        m: 0,
        ml: [2, 0],
        mr: [2, 3],
      },
    },
  },
  navSocialLinks: navFooterSocialLinksPreset,
  navLegal: navLegalPreset,
}
