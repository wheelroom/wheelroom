import { NcssProps } from '../../../types'
import { GridElementStyle } from '../../../element/resets/grid-reset'
import { LegalFooterWheelStyle, legalFooterPreset } from './legal-footer-preset'
import {
  NavigationSegmentWheelStyle,
  navigationSegmentPreset,
} from '../../../model/navigation-segment/presets/navigation-segment-preset'

export interface NavigationFooterWheelStyle {
  wrapper: GridElementStyle
  container: GridElementStyle
  navigation: {
    ncss: NcssProps
    menu: NavigationSegmentWheelStyle
    social: NavigationSegmentWheelStyle
  }
  legalFooter: LegalFooterWheelStyle
}

export const navFooterPreset: NavigationFooterWheelStyle = {
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
  navigation: {
    ncss: {
      label: 'nav-footer',
      flex: 1,
      justifyContent: ['space-evenly', 'space-between'],
      flexDirection: ['column', 'row'],
      alignItems: 'center',
    },
    menu: navigationSegmentPreset,
    social: navigationSegmentPreset,
  },
  legalFooter: legalFooterPreset,
}
