import { NcssProps } from '../../../types'
import { DescriptionListElementStyle } from '../../../element/resets/self-dl-reset'
import { IconElementStyle } from '../../../element/resets/icon-reset'
import { TableElementStyle } from '../../../element/resets/self-table-reset'
import {
  tableRowPreset,
  TableRowWheelStyle,
} from '../../table-row/presets/table-row-preset'
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

export const topicTablePreset: TableWheelStyle = {
  ncss: {
    label: 'topic-table',
    overflowX: 'auto',
  },
  table: {
    ncss: {
      label: 'topic-table-table',
    },
  },
  th: {
    ncss: {
      label: 'topic-table-head',
    },
  },
  tr: {
    ncss: {
      label: 'topic-table-row',
    },
  },
  dd: {
    ncss: {
      label: 'topic-table-description-definition',
    },
  },
  dl: {
    ncss: {
      label: 'topic-table-description-list',
    },
  },
  dt: {
    ncss: {
      label: 'topic-table-description-term',
    },
  },
  icon: {
    ncss: {
      label: 'topic-table-icon',
    },
  },
  actions: {
    ncss: {
      label: 'topic-table-actions',
      mx: -1,
    },
    action: tableActionPreset,
  },
  row: tableRowPreset,
}
