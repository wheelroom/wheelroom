import { NcssProps } from '../../../types'
import { ActionWheelStyle } from '../../action/action'

export interface NavigationSegmentListWheelStyle {
  ncss: NcssProps
  item: {
    ncss: NcssProps
    action: ActionWheelStyle
  }
}

export const navigationSegmentListPreset: NavigationSegmentListWheelStyle = {
  ncss: {
    label: 'navigation-segment-list',
    my: 0,
    pl: 0,
  },
  item: {
    ncss: {
      label: 'navigation-segment-list-item',
      listStyle: 'none',
      display: 'inline-flex',
    },
    action: {
      ncss: {
        label: 'navigation-segment-list-item-action',
        display: 'inline-flex',
      },
      icon: {
        ncss: {
          label: 'navigation-segment-list-item-action-icon',
          w: '15px',
          h: '15px',
          my: 'auto',
        },
      },
    },
  },
}
