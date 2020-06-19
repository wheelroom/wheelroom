import {
  BrandNavigationSegmentWheelStyle,
  brandNavigationSegmentPreset,
} from '../../../navigation-segment/presets/brand-navigation-segment-preset'
import {
  NavigationSegmentWheelStyle,
  navigationSegmentPreset,
} from '../../../navigation-segment/presets/navigation-segment-preset'
import {
  NcssProps,
  GridElementStyle,
  ButtonElementStyle,
} from '../../../../../src-core'
import { ModalWheelStyle, modalPreset } from './modal-preset'

export interface NavigationHeaderWheelStyle {
  skipToContent: NcssProps
  wrapper: GridElementStyle
  container: GridElementStyle
  brand: {
    segment: BrandNavigationSegmentWheelStyle
  }
  menu: {
    ncss: NcssProps
    segment: NavigationSegmentWheelStyle
  }
  actions: {
    ncss: NcssProps
    segment: NavigationSegmentWheelStyle
    themeButton: ButtonElementStyle
  }
  modal: {
    ncss: NcssProps
    button: ButtonElementStyle
    dialog: ModalWheelStyle
  }
}

export const navigationHeaderPreset: NavigationHeaderWheelStyle = {
  skipToContent: {
    ncss: {
      label: 'skip-to-content',
      position: 'absolute',
      left: '-100%',
      ':focus': {
        w: 1,
        minHeight: '70px',
        py: 4,
        px: 3,
        left: 0,
        top: 0,
        right: 0,
        bg: 'white',
        textAlign: 'center',
        zIndex: 1002,
        outlineOffset: -2,
        outlineStyle: 'dotted',
        outlineWidth: 2,
        outlineColor: 'black',
      },
    },
  },
  wrapper: {
    ncss: {
      width: 1,
      height: '70px',
      py: 0,
      borderBottom: '1px solid black',
    },
  },
  container: {
    ncss: {
      height: '100%',
      justifyContent: 'space-between',
      px: 3,
    },
  },
  brand: {
    segment: brandNavigationSegmentPreset,
  },
  menu: {
    ncss: {
      label: 'menu-navigation',
      flex: '1',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
    },
    segment: navigationSegmentPreset,
  },
  actions: {
    ncss: {
      label: 'actions-navigation',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
    },
    segment: navigationSegmentPreset,
    themeButton: {
      ncss: {
        label: 'actions-theme-button',
      },
    },
  },
  modal: {
    ncss: {
      label: 'modal',
      display: ['flex', 'flex', 'none'],
      alignItems: 'center',
    },
    button: {
      ncss: {},
    },
    dialog: modalPreset,
  },
}
