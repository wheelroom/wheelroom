import { NcssNode, ActionModelNcssTree } from '../../../src-core'

export interface NavigationSegmentModelNcssTree extends NcssNode {
  heading: NcssNode
  list: NcssNode
  item: NcssNode
  action: ActionModelNcssTree
}

export interface BrandNavigationSegmentModelNcssTree extends NcssNode {
  branding: NcssNode
  action: ActionModelNcssTree
}
