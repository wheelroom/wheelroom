import { NcssProps } from '../../types'
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
  ncss: NcssProps
  text: TopicContentTextTreeStyle
  actions: TopicActionsTreeStyle
}

export const topicContentPreset: TopicContentTreeStyle = {
  ncss: {
    label: 'topic-content',
    display: 'flex',
    flexDirection: 'column',
    p: 3,
  },
  text: topicContentTextPreset,
  actions: topicContentActionsPreset,
}
