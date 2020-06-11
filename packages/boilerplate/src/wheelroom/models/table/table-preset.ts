import { NcssProps } from '../../types/wheel'
import { DescriptionListElementStyle } from '../../elements/resets/self-dl-reset'
import { IconElementStyle } from '../../elements/resets/icon-reset'
import { TableElementStyle } from '../../elements/resets/self-table-reset'
import {
  tableRowPreset,
  TableRowWheelStyle,
} from '../../wheels/model/table-row/presets/table-row-preset'
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
  ncss: {
    label: 'table-container',
    overflowX: 'auto',
  },
  table: {
    ncss: {
      label: 'table',
    },
  },
  th: {
    ncss: {
      label: 'table-head',
    },
  },
  tr: {
    ncss: {
      label: 'table-row',
    },
  },
  dd: {
    ncss: {
      label: 'table-description-definition',
    },
  },
  dl: {
    ncss: {
      label: 'table-description-list',
    },
  },
  dt: {
    ncss: {
      label: 'table-description-term',
    },
  },
  icon: {
    ncss: {
      label: 'table-icon',
    },
  },
  actions: {
    ncss: {
      label: 'table-actions',
      mx: -1,
    },
    action: tableActionPreset,
  },
  row: tableRowPreset,
}
