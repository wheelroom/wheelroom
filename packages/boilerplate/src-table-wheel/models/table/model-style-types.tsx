import { ActionModelNcssTree, NcssObjectProps } from '../../../src-core'
import { TableRowModelNcssTree } from '../table-row/model-style-types'

export interface TableModelNcssTree extends NcssObjectProps {
  tableElement: NcssObjectProps
  th: NcssObjectProps
  tr: NcssObjectProps
  dd: NcssObjectProps
  dl: NcssObjectProps
  dt: NcssObjectProps
  icon: NcssObjectProps
  actionGroup: NcssObjectProps
  action: ActionModelNcssTree
  tableRow: TableRowModelNcssTree
}
