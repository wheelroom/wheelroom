import { NcssProps } from '../../../../types/wheel'
import { GridElementStyle } from '../../../../elements/resets/grid-reset'
import { LegalFooterWheelStyle, legalFooterPreset } from './legal-footer-preset'
import {
  NavigationSegmentWheelStyle,
  navigationSegmentPreset,
} from '../../../model/navigation-segment/presets/navigation-segment-preset'

export interface NavigationFooterWheelStyle {
  wrapper: GridElementStyle
  container: GridElementStyle
  section: {
    ncss: NcssProps
    menu: {
      ncss: NcssProps
      segment: NavigationSegmentWheelStyle
    }
    social: {
      ncss: NcssProps
      segment: NavigationSegmentWheelStyle
    }
  }
  legalFooter: LegalFooterWheelStyle
}

export const navigationFooterPreset: NavigationFooterWheelStyle = {
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
  section: {
    ncss: {
      label: 'navigation-segments',
      alignItems: 'center',
    },
    menu: {
      ncss: {
        label: 'menu-navigation',
      },
      segment: navigationSegmentPreset,
    },
    social: {
      ncss: {
        label: 'social-navigation',
      },
      segment: navigationSegmentPreset,
    },
  },
  legalFooter: legalFooterPreset,
}
