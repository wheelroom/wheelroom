import {
  NcssProps,
  HeadingElementStyle,
  ActionModelStyle,
} from '../../../src-core'

export interface NavigationSegmentStyle {
  container?: NcssProps
  heading?: HeadingElementStyle
}

export interface NavigationSegmentListStyle {
  list?: NcssProps
  item?: NcssProps
  action?: ActionModelStyle
}

export interface NavigationSegmentModelStyle
  extends NavigationSegmentStyle,
    NavigationSegmentListStyle {}
