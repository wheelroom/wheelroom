import { NcssNode, ActionNcssTree } from '../../../src-core'

export interface NavigationSegmentNcssTree extends NcssNode {
  heading: NcssNode
  list: NcssNode
  item: NcssNode
  action: ActionNcssTree
}

export interface BrandNavigationSegmentNcssTree extends NcssNode {
  branding: NcssNode
  action: ActionNcssTree
}
