import { NcssProps } from '../elements/types'
import { topicMediaPresent, TopicMediaTreeStyle } from './topic-media-present'
import { topicContentPreset, TopicContentTreeStyle } from './topic-content-preset'

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
    flexDirection: 'column',
    w: 1,
  },
  media: topicMediaPresent,
  content: topicContentPreset,
}
