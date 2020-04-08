import { NcssProps } from '../../elements/types'
import { TopicMediaTreeStyle, topicMediaStyle } from './topic-media-style'
import { TopicContentTreeStyle, topicContentStyle } from './topic-content-style'

export interface TopicTreeStyle {
  /** Wrapper around the whole topic */
  wrapper?: NcssProps
  /** Wrapper around media */
  media?: TopicMediaTreeStyle
  content?: TopicContentTreeStyle
}

export const topicTreeStyle: TopicTreeStyle = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
  },
  media: topicMediaStyle,
  content: topicContentStyle,
}
