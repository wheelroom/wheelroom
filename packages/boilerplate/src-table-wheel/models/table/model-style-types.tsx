import { ActionModelStyle, NcssObjectProps } from '../../../src-core'
import { TableRowModelStyle } from '../table-row/model-style-types'

export interface TableModelStyle extends NcssObjectProps {
  table: NcssObjectProps
  th: NcssObjectProps
  tr: NcssObjectProps
  dd: NcssObjectProps
  dl: NcssObjectProps
  dt: NcssObjectProps
  icon: NcssObjectProps
  actionGroup: NcssObjectProps
  action: ActionModelStyle
  row: TableRowModelStyle
}
