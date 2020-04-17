import { NcssProps } from '../../types'
import { TopicMediaPreset, topicMediaPreset } from './topic-media-preset'
import { TopicContentPreset, topicContentPreset } from './topic-content-preset'

export interface TopicPreset {
  /** Styling for this node */
  ncss: NcssProps
  /** Media */
  media: TopicMediaPreset
  /** Content */
  content: TopicContentPreset
  /** Topic as Link */
  topicAsLink: NcssProps
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
  topicAsLink: {
    ncss: {},
  },
}
