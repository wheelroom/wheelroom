import { NcssProps } from '../../elements/types'
import { TopicMediaTreeStyle, topicMediaStyle } from './topic-media-style'
import { TopicContentTreeStyle, topicContentStyle } from './topic-content-style'

export interface TopicTreeStyle {
  /** Wrapper around the whole topic */
  node?: NcssProps
  /** Wrapper around media */
  media?: TopicMediaTreeStyle
  content?: TopicContentTreeStyle
}

export const topicTreeStyle: TopicTreeStyle = {
  node: {
    display: 'flex',
  },
  media: topicMediaStyle,
  content: topicContentStyle,
}
