import { NcssProps } from '../../../types'
import {
  NavigationSegmentListWheelStyle,
  navigationSegmentListPreset,
} from './navigation-segment-list-preset'
import { HeadingElementStyle } from '../../../element/resets/heading-reset'

export interface NavigationSegmentWheelStyle {
  ncss: NcssProps
  heading: HeadingElementStyle
  list: NavigationSegmentListWheelStyle
}

export const navigationSegmentPreset: NavigationSegmentWheelStyle = {
  ncss: {
    label: 'navigation-segments',
  },
  heading: {
    ncss: {
      label: 'navigation-segments-heading',
    },
  },
  list: navigationSegmentListPreset,
}
