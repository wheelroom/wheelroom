import { NcssProps } from '../../../types'
import { ButtonReset, buttonReset } from '../../../elements/button-reset'

export interface NavHeaderActionsPreset {
  ncss: NcssProps
  action: ButtonReset
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
