import { GridElementStyle, NcssProps } from '../../../../../src-core'
import { NavigationSegmentWheelStyle } from '../../../navigation-segment/navigation-segment'
import { navigationSegment } from '../../../../../src/themes/glacier/wheel-styles/navigation/navigation-segment/navigation-segment'
import { LegalFooterWheelStyle, legalFooterPreset } from './legal-footer-preset'

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
      segment: navigationSegment,
    },
    social: {
      ncss: {
        label: 'social-navigation',
      },
      segment: navigationSegment,
    },
  },
  legalFooter: legalFooterPreset,
}
