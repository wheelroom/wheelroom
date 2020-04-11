import { NcssProps } from '../elements/types'
import { topicMediaPresent, TopicMediaTreeStyle } from './topic-media-present'
import { topicContentStyle, TopicContentTreeStyle } from './topic-content-style'

export interface TopicPreset {
  /** Styling for this node */
  ncss?: NcssProps
  /** Media */
  media?: TopicMediaTreeStyle
  /** Content */
  content?: TopicContentTreeStyle
}

export const topicTreeStyle: TopicPreset = {
  ncss: {
    label: 'topic',
    display: 'flex',
  },
  media: topicMediaPresent,
  content: topicContentStyle,
}
