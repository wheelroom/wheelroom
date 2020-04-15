import { NcssProps } from '../../../types'
import { GridPreset } from '../../../elements/grid-preset'
import { LegalPreset, legalPreset } from './legal-preset'
import {
  NavFooterSocialLinksPreset,
  navFooterSocialLinksPreset,
} from './nav-footer-social-links-preset'
import {
  NavFooterListPreset,
  navFooterListPreset,
} from './nav-footer-list-preset'

export interface NavFooterPreset {
  wrapper: GridPreset
  container: GridPreset
  navFooter: {
    ncss: NcssProps
    list: NavFooterListPreset
    navSocialLinks: NavFooterSocialLinksPreset
  }
  legal: LegalPreset
}

export const navFooterPreset: NavFooterPreset = {
  wrapper: {
    ncss: {},
  },
  container: {
    ncss: {
      borderTop: '1px solid transparent',
      borderColor: 'border',
      px: 3,
    },
  },
  navFooter: {
    ncss: {
      h: '84px',
      flex: 1,
      justifyContent: ['space-evenly', 'space-between'],
      flexDirection: ['column', 'row'],
      alignItems: 'center',
    },
    list: navFooterListPreset,
    navSocialLinks: navFooterSocialLinksPreset,
  },
  legal: legalPreset,
}
