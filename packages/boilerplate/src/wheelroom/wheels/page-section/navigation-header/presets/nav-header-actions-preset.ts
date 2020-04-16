import { NcssProps } from '../../../types'
import { ButtonPreset, buttonPreset } from '../../../elements/button-preset'

export interface NavHeaderActionsPreset {
  ncss: NcssProps
  action: ButtonPreset
  themeButton: NcssProps
}

export const navHeaderActionsPreset: NavHeaderActionsPreset = {
  ncss: {
    label: 'nav-header-actions',
  },
  action: {
    ncss: {
      label: 'nav-header-action',
      ...buttonPreset,
    },
  },
  themeButton: {
    ncss: {
      label: 'nav-header-theme-button',
      ml: 2,
      textTransform: 'capitalize',
    },
  },
}
