import {
  NcssProps,
  NcssObjectProps,
  ActionModelStyle,
} from '../../../src-core'

export interface NavigationSegmentModelStyle {
  ncss?: NcssProps
  heading?: NcssObjectProps
  list?: NcssProps
  item?: NcssProps
  action: ActionModelStyle
}

export interface BrandNavigationSegmentModelStyle {
  ncss?: NcssProps
  brand?: NcssProps
  action: ActionModelStyle
}
