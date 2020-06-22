import { tablePreset, TableWheelStyle } from '../table/table-wheel-style'
import { GridElementStyle } from '../../../src-core'

export interface TableSectionWheelStyle {
  container: GridElementStyle
  section: TableWheelStyle
  wrapper: GridElementStyle
}

export const tableSectionWheelStyle: TableSectionWheelStyle = {
  container: {
    ncss: {},
  },
  section: tablePreset,
  wrapper: {
    ncss: {},
  },
}
