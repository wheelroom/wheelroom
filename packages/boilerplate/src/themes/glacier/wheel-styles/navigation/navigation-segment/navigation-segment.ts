import { NavigationSegmentWheelStyle } from '../../../../../../src-navigation-wheel/models/navigation-segment/navigation-segment'

export const navigationSegment: NavigationSegmentWheelStyle = {
  ncss: {
    label: 'navigation-segment',
  },
  heading: {
    ncss: {
      label: 'navigation-segment-heading',
    },
  },
  list: {
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
  },
}
