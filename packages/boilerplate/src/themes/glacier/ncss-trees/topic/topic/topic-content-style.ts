import { TopicContentWheelStyle } from '../../../../../../src-topic-wheel/models/topic/topic-content'
import { topicContentActionsStyle } from './topic-content-actions-style'
import { topicContentTextWheelStyle } from './topic-content-text-style'

export const topicContentStyle: TopicContentWheelStyle = {
  ncss: {
    label: 'topic-content',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  text: topicContentTextWheelStyle,
  actions: topicContentActionsStyle,
}
