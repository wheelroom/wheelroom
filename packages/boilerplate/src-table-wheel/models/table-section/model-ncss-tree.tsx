import { NcssNode } from '../../../src-core'
import { TableRowModelNcssTree } from '../table-row/model-ncss-tree'

export interface TableSectionModelNcssTree {
  container: NcssNode
  table: TableRowModelNcssTree
  wrapper: NcssNode
}
