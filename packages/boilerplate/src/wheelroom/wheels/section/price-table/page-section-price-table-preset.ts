import { GridElementStyle } from '../../element/resets/grid-reset'
import {
  tablePreset,
  TableWheelStyle,
} from '../../model/table/presets/table-preset'

export interface PageSectionPriceTableWheelStyle {
  container: GridElementStyle
  topicTable: TableWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionPriceTablePreset: PageSectionPriceTableWheelStyle = {
  container: {
    ncss: {
      px: 3,
      overflow: 'hidden',
    },
  },
  topicTable: tablePreset,
  wrapper: {
    ncss: {},
  },
}
