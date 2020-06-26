import { NcssObjectProps, ActionModelNcssTree } from '../../../src-core'

export interface NavigationSegmentModelNcssTree extends NcssObjectProps {
  heading: NcssObjectProps
  list: NcssObjectProps
  item: NcssObjectProps
  action: ActionModelNcssTree
}

export interface BrandNavigationSegmentModelNcssTree extends NcssObjectProps {
  branding: NcssObjectProps
  action: ActionModelNcssTree
}
