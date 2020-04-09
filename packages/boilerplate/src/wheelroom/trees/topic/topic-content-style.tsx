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
  ncss?: NcssProps
  text?: TopicContentTextTreeStyle
  actions?: TopicActionsTreeStyle
}

export const topicContentStyle: TopicContentTreeStyle = {
  ncss: {
    color: 'purple',
  },
  text: topicContentTextStyle,
  actions: topicContentActionsStyle,
}
