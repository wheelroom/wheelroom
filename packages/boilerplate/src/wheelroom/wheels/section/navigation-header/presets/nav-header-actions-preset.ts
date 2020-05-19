import { NcssProps } from '../../../types'
import { IconElementStyle } from '../../../element/resets/icon-reset'

export interface NavHeaderActionsWheelStyle {
  ncss: NcssProps
  link: {
    ncss: NcssProps
    icon: IconElementStyle
  }
  themeButton: NcssProps
}

export const navHeaderActionsPreset: NavHeaderActionsWheelStyle = {
  ncss: {
    label: 'nav-header-actions',
  },
  link: {
    ncss: {
      label: 'nav-header-action',
      mr: 2,
      ':last-child': {
        mr: 0,
      },
    },
    icon: {
      ncss: {
        label: 'nav-header-action-icon',
      },
    },
  },
  themeButton: {
    ncss: {
      label: 'nav-header-theme-button',
    },
  },
}
