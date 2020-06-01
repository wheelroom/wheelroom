import { NcssProps } from '../../../types'
import { DescriptionListElementStyle } from '../../../element/resets/self-dl-reset'
import { IconElementStyle } from '../../../element/resets/icon-reset'
import { TableElementStyle } from '../../../element/resets/self-table-reset'
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
  ncss: {
    label: 'table-row',
  },
  header: {
    ncss: {},
  },
  footer: {
    ncss: {},
  },
  th: {
    ncss: {
      label: 'table-row-header-cell',
    },
  },
  dd: {
    ncss: {
      label: 'table-row-description-definition',
    },
  },
  dl: {
    ncss: {
      label: 'table-row-description-list',
    },
  },
  dt: {
    ncss: {
      label: 'table-row-description-term',
    },
  },
  icon: {
    ncss: {
      label: 'table-row-icon',
    },
  },
  actions: {
    ncss: {
      label: 'table-row-actions',
      mx: -1,
    },
    action: tableRowActionPreset,
  },
  cell: tableRowCellPreset,
}
