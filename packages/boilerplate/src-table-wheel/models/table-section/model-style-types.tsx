import { TableModelNcssTree } from '../table/model-style-types'
import { NcssNode } from '../../../src-core'

export interface TableSectionModelNcssTree {
  container: NcssNode
  table: TableModelNcssTree
  wrapper: NcssNode
}
