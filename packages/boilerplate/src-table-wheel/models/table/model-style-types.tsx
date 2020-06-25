import {
  ActionModelStyle,
  DescriptionListElementStyle,
  NcssObjectProps,
  NcssProps,
  TableElementStyle,
} from '../../../src-core'
import { TableRowModelStyle } from '../table-row/model-style-types'

export interface TableModelStyle {
  ncss: NcssProps
  table: TableElementStyle
  th: TableElementStyle
  tr: TableElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  icon: NcssObjectProps
  actionGroup: NcssProps
  action: ActionModelStyle
  row: TableRowModelStyle
}
