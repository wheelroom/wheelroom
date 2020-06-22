import { TopicContentWheelStyle } from '../../../../../../src-topic-wheel/models/topic/presets/topic-content-style'
import { topicContentTextWheelStyle } from '../../../../../../src-topic-wheel/models/topic/presets/topic-content-text-style'
import { topicContentActionsStyle } from './topic-content-actions-style'

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
