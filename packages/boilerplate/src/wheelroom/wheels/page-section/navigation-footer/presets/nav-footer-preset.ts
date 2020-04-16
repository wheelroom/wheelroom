import { NcssProps } from '../../../types'
import { GridPreset } from '../../../elements/grid-preset'
import { LegalPreset, legalPreset } from './legal-preset'
import {
  NavFooterSocialListPreset,
  navFooterSocialListPreset,
} from './nav-footer-social-list-preset'
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
    socialList: NavFooterSocialListPreset
  }
  legal: LegalPreset
}

export const navFooterPreset: NavFooterPreset = {
  wrapper: {
    ncss: {
      borderTop: '1px solid black',
      py: 0,
    },
  },
  container: {
    ncss: {
      minHeight: '84px',
      px: 2,
    },
  },
  navFooter: {
    ncss: {
      label: 'nav-footer',
      flex: 1,
      justifyContent: ['space-evenly', 'space-between'],
      flexDirection: ['column', 'row'],
      alignItems: 'center',
    },
    list: navFooterListPreset,
    socialList: navFooterSocialListPreset,
  },
  legal: legalPreset,
}
