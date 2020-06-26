import { TableModelNcssTree } from '../table/model-style-types'
import { NcssObjectProps } from '../../../src-core'

export interface TableSectionModelNcssTree {
  container: NcssObjectProps
  table: TableModelNcssTree
  wrapper: NcssObjectProps
}
