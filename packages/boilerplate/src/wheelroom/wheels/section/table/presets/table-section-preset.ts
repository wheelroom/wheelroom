import { GridElementStyle } from '../../../../elements/resets/grid-reset'
import {
  tablePreset,
  TableWheelStyle,
} from '../../../model/table/presets/table-preset'

export interface TableSectionWheelStyle {
  container: GridElementStyle
  section: TableWheelStyle
  wrapper: GridElementStyle
}

export const tableSectionPreset: TableSectionWheelStyle = {
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
