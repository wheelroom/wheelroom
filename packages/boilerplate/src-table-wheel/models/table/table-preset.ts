import {
  TableRowWheelStyle,
  tableRowPreset,
} from '../table-row/table-row-style'
import {
  DescriptionListElementStyle,
  NcssProps,
  TableElementStyle,
  IconElementStyle,
} from '../../../src-core'
import { TableActionWheelStyle, tableActionPreset } from './table-action-preset'

export interface TableWheelStyle {
  ncss: NcssProps
  table: TableElementStyle
  th: TableElementStyle
  tr: TableElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  icon: IconElementStyle
  actions: {
    ncss: NcssProps
    action: TableActionWheelStyle
  }
  row: TableRowWheelStyle
}

export const tablePreset: TableWheelStyle = {
  ncss: {},
  table: {
    ncss: {},
  },
  th: {
    ncss: {},
  },
  tr: {
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
    action: tableActionPreset,
  },
  row: tableRowPreset,
}
