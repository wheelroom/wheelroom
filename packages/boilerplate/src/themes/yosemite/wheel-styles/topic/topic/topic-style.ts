import { TopicWheelStyle } from '../../../../../../src-topic-wheel/models/topic/topic'
import { topicMediaStyle } from './topic-media-style'
import { topicContentStyle } from './topic-content-style'

export const topicStyle: TopicWheelStyle = {
  ncss: {
    label: 'topic',
    display: 'flex',
    flexDirection: 'column',
    w: 1,
  },
  media: topicMediaStyle,
  content: topicContentStyle,
}
