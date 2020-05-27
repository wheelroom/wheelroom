import { GridElementStyle } from '../../../element/resets/grid-reset'
import {
  topicTablePreset,
  TopicTableWheelStyle,
} from '../../../model/topic-table/presets/topic-table-preset'

export interface PageSectionPriceTableWheelStyle {
  container: GridElementStyle
  table: TopicTableWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionPriceTablePreset: PageSectionPriceTableWheelStyle = {
  container: {
    ncss: {},
  },
  table: topicTablePreset,
  wrapper: {
    ncss: {},
  },
}
