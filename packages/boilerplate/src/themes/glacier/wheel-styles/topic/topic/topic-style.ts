import { TopicModelNcssTree } from '../../../../../../src-topic-wheel'
import { topicMediaStyle } from './topic-media-style'
import { topicContentStyle } from './topic-content-style'

export const topicNcssTree: TopicModelNcssTree = {
  ncss: {
    label: 'topic',
    display: 'flex',
    flexDirection: 'column',
    w: 1,
  },
  media: topicMediaStyle,
  content: topicContentStyle,
}
