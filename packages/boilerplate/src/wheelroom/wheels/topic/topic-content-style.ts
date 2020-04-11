import { NcssProps } from '../elements/types'
import {
  TopicContentTextTreeStyle,
  topicContentTextPreset,
} from './topic-content-text-preset'
import {
  TopicActionsTreeStyle,
  topicContentActionsPreset,
} from './topic-content-actions-preset'

export interface TopicContentTreeStyle {
  /** Wrapper around all content including action */
  ncss?: NcssProps
  text?: TopicContentTextTreeStyle
  actions?: TopicActionsTreeStyle
}

export const topicContentStyle: TopicContentTreeStyle = {
  ncss: {
    label: 'topic-content',
    display: 'flex',
  },
  text: topicContentTextPreset,
  actions: topicContentActionsPreset,
}
