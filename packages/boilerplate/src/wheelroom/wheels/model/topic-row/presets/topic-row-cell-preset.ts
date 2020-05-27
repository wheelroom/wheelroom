import { NcssProps } from '../../../types'
import { topicPreset, TopicWheelStyle } from '../../topic/presets/topic-preset'

export interface TopicRowCellWheelStyle {
  ncss: NcssProps
  topic: TopicWheelStyle
}

export const topicRowCellPreset: TopicRowCellWheelStyle = {
  ncss: {
    label: 'topic-row-cell',
  },
  topic: topicPreset,
}
