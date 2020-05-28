import { GridElementStyle } from '../../element/resets/grid-reset'
import {
  topicTablePreset,
  TopicTableWheelStyle,
} from '../../model/topic-table/presets/topic-table-preset'

export interface PageSectionPriceTableWheelStyle {
  container: GridElementStyle
  topicTable: TopicTableWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionPriceTablePreset: PageSectionPriceTableWheelStyle = {
  container: {
    ncss: {
      px: 3,
      overflow: 'hidden',
    },
  },
  topicTable: topicTablePreset,
  wrapper: {
    ncss: {},
  },
}
