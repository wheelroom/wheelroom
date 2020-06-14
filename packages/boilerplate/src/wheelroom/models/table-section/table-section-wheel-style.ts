import { GridElementStyle } from '../../elements/resets/grid-reset'
import { tablePreset, TableWheelStyle } from '../table/table-preset'

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
