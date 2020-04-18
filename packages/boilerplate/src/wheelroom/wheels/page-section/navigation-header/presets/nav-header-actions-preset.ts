import { NcssProps } from '../../../types'
import { ButtonElementStyle, buttonReset } from '../../../elements/resets/button-reset'

export interface NavHeaderActionsPreset {
  ncss: NcssProps
  action: ButtonElementStyle
  themeButton: NcssProps
}

export const navHeaderActionsPreset: NavHeaderActionsPreset = {
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
