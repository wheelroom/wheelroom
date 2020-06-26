import { ActionModelNcssTree, NcssNode } from '../../../src-core'
import { TableRowModelNcssTree } from '../table-row/model-style-types'

export interface TableModelNcssTree extends NcssNode {
  tableElement: NcssNode
  th: NcssNode
  tr: NcssNode
  dd: NcssNode
  dl: NcssNode
  dt: NcssNode
  icon: NcssNode
  actionGroup: NcssNode
  action: ActionModelNcssTree
  tableRow: TableRowModelNcssTree
}
