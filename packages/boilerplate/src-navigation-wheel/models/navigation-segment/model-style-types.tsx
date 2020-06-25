import { NcssObjectProps, ActionModelStyle } from '../../../src-core'

export interface NavigationSegmentModelStyle extends NcssObjectProps {
  heading?: NcssObjectProps
  list?: NcssObjectProps
  item?: NcssObjectProps
  action: ActionModelStyle
}

export interface BrandNavigationSegmentModelStyle {
  ncss?: NcssObjectProps
  brand?: NcssObjectProps
  action: ActionModelStyle
}
