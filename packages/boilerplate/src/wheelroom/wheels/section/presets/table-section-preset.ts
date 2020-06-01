import { GridElementStyle } from '../../element/resets/grid-reset'
import {
  tablePreset,
  TableWheelStyle,
} from '../../model/table/presets/table-preset'

export interface TableSectionWheelStyle {
  container: GridElementStyle
  table: TableWheelStyle
  wrapper: GridElementStyle
}

export const tableSectionPreset: TableSectionWheelStyle = {
  container: {
    ncss: {
      px: 3,
      overflow: 'hidden',
    },
  },
  table: tablePreset,
  wrapper: {
    ncss: {},
  },
}
