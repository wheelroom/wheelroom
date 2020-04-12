import { NcssProps } from '../../types'
import { TopicMediaTreeStyle, topicMediaPreset } from './topic-media-preset'
import {
  TopicContentTreeStyle,
  topicContentPreset,
} from './topic-content-preset'

export interface TopicPreset {
  /** Styling for this node */
  ncss?: NcssProps
  /** Media */
  media?: TopicMediaTreeStyle
  /** Content */
  content?: TopicContentTreeStyle
}

export const topicPreset: TopicPreset = {
  ncss: {
    label: 'topic',
    display: 'flex',
    flexDirection: 'column',
    w: 1,
  },
  media: topicMediaPreset,
  content: topicContentPreset,
}
