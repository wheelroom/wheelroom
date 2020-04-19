import { NcssProps } from '../../../types'
import {
  ButtonElementStyle,
  buttonReset,
} from '../../../element/resets/button-reset'

export interface NavHeaderActionsWheelStyle {
  ncss: NcssProps
  action: ButtonElementStyle
  themeButton: NcssProps
}

export const navHeaderActionsPreset: NavHeaderActionsWheelStyle = {
  ncss: {
    label: 'nav-header-actions',
  },
  action: {
    ncss: {
      label: 'nav-header-action',
      ...buttonReset,
      mr: 2,
    },
  },
  themeButton: {
    ncss: {
      label: 'nav-header-theme-button',
    },
  },
}
