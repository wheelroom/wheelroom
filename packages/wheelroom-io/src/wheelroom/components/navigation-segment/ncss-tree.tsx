import { NcssNode, ActionNcssTree } from '@wheelroom/core'

export interface NavigationSegmentNcssTree extends NcssNode {
  heading: NcssNode
  abstract: NcssNode
  list: NcssNode
  item: NcssNode
  action: ActionNcssTree
}
