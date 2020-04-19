import { NcssProps } from '../../../types'
import { TopicMediaWheelStyle, topicMediaPreset } from './topic-media-preset'
import {
  TopicContentWheelStyle,
  topicContentPreset,
} from './topic-content-preset'

export interface TopicWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Media */
  media: TopicMediaWheelStyle
  /** Content */
  content: TopicContentWheelStyle
}

export const topicPreset: TopicWheelStyle = {
  ncss: {
    label: 'topic',
    display: 'flex',
    flexDirection: 'column',
    w: 1,
  },
  media: topicMediaPreset,
  content: topicContentPreset,
}
