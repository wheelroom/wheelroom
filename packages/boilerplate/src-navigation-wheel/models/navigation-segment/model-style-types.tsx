import {
  NcssProps,
  HeadingElementStyle,
  ActionModelStyle,
} from '../../../src-core'

export interface NavigationSegmentModelStyle {
  ncss?: NcssProps
  heading?: HeadingElementStyle
  list?: NcssProps
  item?: NcssProps
  action: ActionModelStyle
}

export interface BrandNavigationSegmentModelStyle {
  ncss?: NcssProps
  brand?: NcssProps
  action: ActionModelStyle
}
