import { NcssProps } from '../../../types'
import { GridElementStyle } from '../../../element/resets/grid-reset'
import { LegalFooterWheelStyle, legalFooterPreset } from './legal-footer-preset'
import {
  NavFooterSocialListWheelStyle,
  navFooterSocialListPreset,
} from './nav-footer-social-list-preset'
import {
  NavFooterListPresetWheelStyle,
  navFooterListPreset,
} from './nav-footer-list-preset'

export interface NavFooterWheelStyle {
  wrapper: GridElementStyle
  container: GridElementStyle
  navFooter: {
    ncss: NcssProps
    list: NavFooterListPresetWheelStyle
    socialList: NavFooterSocialListWheelStyle
  }
  legalFooter: LegalFooterWheelStyle
}

export const navFooterPreset: NavFooterWheelStyle = {
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
  legalFooter: legalFooterPreset,
}
