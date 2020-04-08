import { NcssProps } from '../../elements/types'
import {
  TopicContentTextTreeStyle,
  topicContentTextStyle,
} from './topic-content-text-style'
import {
  TopicActionsTreeStyle,
  topicContentActionsStyle,
} from './topic-content-actions-style'

export interface TopicContentTreeStyle {
  /** Wrapper around all content including action */
  wrapper?: NcssProps
  contentText?: TopicContentTextTreeStyle
  contentActions?: TopicActionsTreeStyle
}

export const topicContentStyle: TopicContentTreeStyle = {
  wrapper: {
    justifyContent: 'center',
    label: 'topic-content',
    p: 3,
  },
  contentText: topicContentTextStyle,
  contentActions: topicContentActionsStyle,
}
