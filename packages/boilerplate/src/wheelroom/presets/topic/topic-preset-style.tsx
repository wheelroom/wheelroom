import { NcssProps } from '../../elements/types'
import { topicMediaStyle, TopicMediaTreeStyle } from './topic-media-style'
import { topicContentStyle, TopicContentTreeStyle } from './topic-content-style'

export interface TopicPresetStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Media */
  media?: TopicMediaTreeStyle
  /** Content */
  content?: TopicContentTreeStyle
}

export const topicTreeStyle: TopicPresetStyle = {
  ncss: {
    label: 'topic',
    display: 'flex',
  },
  media: topicMediaStyle,
  content: topicContentStyle,
}
