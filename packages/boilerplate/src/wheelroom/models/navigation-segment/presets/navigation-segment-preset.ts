import { NcssProps } from '../../../types/wheel'
import { HeadingElementStyle } from '../../../elements/resets/heading-reset'
import {
  NavigationSegmentListWheelStyle,
  navigationSegmentListPreset,
} from './navigation-segment-list-preset'

export interface NavigationSegmentWheelStyle {
  ncss: NcssProps
  heading: HeadingElementStyle
  list: NavigationSegmentListWheelStyle
}

export const navigationSegmentPreset: NavigationSegmentWheelStyle = {
  ncss: {
    label: 'navigation-segment',
  },
  heading: {
    ncss: {
      label: 'navigation-segment-heading',
    },
  },
  list: navigationSegmentListPreset,
}
