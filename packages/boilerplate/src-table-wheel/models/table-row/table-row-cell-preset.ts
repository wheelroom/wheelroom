import { NcssProps } from '../../../src-core'
import { TopicWheelStyle } from '../../../src-topic-wheel'
import { topicPreset } from '../../../src-topic-wheel/models/topic/presets/topic-preset'

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
