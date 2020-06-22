import {
  NcssProps,
  TableElementStyle,
  DescriptionListElementStyle,
  IconElementStyle,
} from '../../../src-core'
import {
  tableRowCellPreset,
  TableRowCellWheelStyle,
} from './table-row-cell-preset'
import {
  tableRowActionPreset,
  TableRowActionWheelStyle,
} from './table-row-action-preset'

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

export const tableRowPreset: TableRowWheelStyle = {
  ncss: {},
  header: {
    ncss: {},
  },
  footer: {
    ncss: {},
  },
  th: {
    ncss: {},
  },
  dd: {
    ncss: {},
  },
  dl: {
    ncss: {},
  },
  dt: {
    ncss: {},
  },
  icon: {
    ncss: {},
  },
  actions: {
    ncss: {},
    action: tableRowActionPreset,
  },
  cell: tableRowCellPreset,
}
