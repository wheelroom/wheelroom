import { NcssProps } from '../../../../types/wheel'
import {
  topicPreset,
  TopicWheelStyle,
} from '../../../../models/topic/presets/topic-preset'

export interface TableRowCellWheelStyle {
  ncss: NcssProps
  topic: TopicWheelStyle
}

export const tableRowCellPreset: TableRowCellWheelStyle = {
  ncss: {
    label: 'table-row-cell',
  },
  topic: topicPreset,
}
