import { NcssNode } from '../../../src-core'
import { TableRowNcssTree } from '../table-row/ncss-tree'

export interface TableSectionNcssTree {
  container: NcssNode
  table: TableRowNcssTree
  wrapper: NcssNode
}
