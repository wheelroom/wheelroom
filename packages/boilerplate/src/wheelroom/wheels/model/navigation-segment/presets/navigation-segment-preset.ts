import { NcssProps } from '../../../../types/wheel'
import {
  NavigationSegmentListWheelStyle,
  navigationSegmentListPreset,
} from './navigation-segment-list-preset'
import { HeadingElementStyle } from '../../../../elements/resets/heading-reset'

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
