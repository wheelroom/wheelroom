import { NavigationSegmentNcssTree } from '@wheelroom/wheel-navigation'
import { iconSmallNcss } from '../../icon-ncss'

export const navigationSegmentNcssTree: NavigationSegmentNcssTree = {
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
  },
  item: {
    ncss: {
      label: 'navigation-segment-item',
      listStyle: 'none',
      display: 'inline-flex',
    },
  },
  action: {
    ncss: {
      label: 'navigation-segment-action',
      display: 'inline-flex',
    },
    icon: {
      ncss: {
        label: 'navigation-segment-action-icon',
        ...iconSmallNcss,
      },
    },
  },
}
