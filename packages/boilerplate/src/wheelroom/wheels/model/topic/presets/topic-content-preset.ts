import { NcssProps } from '../../../types'
import {
  TopicContentTextWheelStyle,
  topicContentTextWheelStyle,
} from './topic-content-text-preset'
import {
  TopicContentActionsWheelStyle,
  topicContentActionsPreset,
} from './topic-content-actions-preset'

export interface TopicContentWheelStyle {
  /** Wrapper around all content including action */
  ncss: NcssProps
  text: TopicContentTextWheelStyle
  actions: TopicContentActionsWheelStyle
}

export const topicContentPreset: TopicContentWheelStyle = {
  ncss: {
    label: 'topic-content',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  text: topicContentTextWheelStyle,
  actions: topicContentActionsPreset,
}
