import {
  NcssProps,
  TableElementStyle,
  DescriptionListElementStyle,
  IconElementStyle,
} from '../../../src-core'
import { TableRowCellWheelStyle } from './table-row-cell-style'
import { TableRowActionWheelStyle } from './table-row-action-style'

export interface TableRowWheelStyle {
  ncss: NcssProps
  header: NcssProps
  footer: NcssProps
  th: TableElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  icon: IconElementStyle
  actions: {
    ncss: NcssProps
    action: TableRowActionWheelStyle
  }
  cell: TableRowCellWheelStyle
}
