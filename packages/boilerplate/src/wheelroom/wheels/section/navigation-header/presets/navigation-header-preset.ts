import { NcssProps } from '../../../types'
import { GridElementStyle } from '../../../element/resets/grid-reset'
import {
  BrandNavigationSegmentWheelStyle,
  brandNavigationSegmentPreset,
} from '../../../model/navigation-segment/presets/brand-navigation-segment-preset'
import { ModalWheelStyle, modalPreset } from './modal-preset'
import { ButtonElementStyle } from '../../../element/resets/button-reset'
import {
  secondaryButtonStyle,
  primaryButtonStyle,
} from '../../../../../themes/yosemite/elements/button-style'
import {
  NavigationSegmentWheelStyle,
  navigationSegmentPreset,
} from '../../../model/navigation-segment/presets/navigation-segment-preset'

export interface NavigationHeaderWheelStyle {
  skipToContent: NcssProps
  wrapper: GridElementStyle
  container: GridElementStyle
  brandNavSegment: BrandNavigationSegmentWheelStyle
  navigation: {
    ncss: NcssProps
    menu: NavigationSegmentWheelStyle
    actions: NavigationSegmentWheelStyle
    themeButton: ButtonElementStyle
  }
  modal: {
    ncss: NcssProps
    button: ButtonElementStyle
    dialog: ModalWheelStyle
  }
}

export const navHeaderPreset: NavigationHeaderWheelStyle = {
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
  brandNavSegment: brandNavigationSegmentPreset,
  navigation: {
    ncss: {
      label: 'navigation',
      flex: '1',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
    },
    menu: navigationSegmentPreset,
    actions: navigationSegmentPreset,
    themeButton: primaryButtonStyle,
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
