import { tablePreset, TableWheelStyle } from '../table/table-preset'
import { GridElementStyle } from '../../../src-core'

export interface TableSectionWheelStyle {
  container: GridElementStyle
  section: TableWheelStyle
  wrapper: GridElementStyle
}

export const tableSectionWheelStyle: TableSectionWheelStyle = {
  container: {
    ncss: {
      px: 3,
      overflow: 'hidden',
    },
  },
  section: tablePreset,
  wrapper: {
    ncss: {},
  },
}
