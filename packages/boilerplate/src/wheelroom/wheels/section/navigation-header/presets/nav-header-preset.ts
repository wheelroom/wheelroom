import { NcssProps } from '../../../types'
import { GridElementStyle } from '../../../element/resets/grid-reset'
import { BrandingWheelStyle, brandingPreset } from './branding-preset'
import {
  NavHeaderActionsWheelStyle,
  navHeaderActionsPreset,
} from './nav-header-actions-preset'
import { ModalWheelStyle, modalPreset } from './modal-preset'

import {
  NavHeaderListWheelStyle,
  navHeaderListPreset,
} from './nav-header-list-preset'
import { ButtonElementStyle } from '../../../element/resets/button-reset'

export interface NavHeaderWheelStyle {
  skipToContent: NcssProps
  wrapper: GridElementStyle
  container: GridElementStyle
  branding: BrandingWheelStyle
  navHeader: {
    ncss: NcssProps
    list: NavHeaderListWheelStyle
    actions: NavHeaderActionsWheelStyle
  }
  modal: {
    ncss: NcssProps
    button: ButtonElementStyle
    dialog: ModalWheelStyle
  }
}

export const navHeaderPreset: NavHeaderWheelStyle = {
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
  branding: brandingPreset,
  navHeader: {
    ncss: {
      label: 'nav-header',
      flex: '1',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
    },
    list: navHeaderListPreset,
    actions: navHeaderActionsPreset,
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
