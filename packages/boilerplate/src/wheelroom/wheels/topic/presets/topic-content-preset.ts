import { NcssProps } from '../../types'
import {
  TopicContentTextPreset,
  topicContentTextPreset,
} from './topic-content-text-preset'
import {
  TopicContentActionsPreset,
  topicContentActionsPreset,
} from './topic-content-actions-preset'

export interface TopicContentPreset {
  /** Wrapper around all content including action */
  ncss: NcssProps
  text: TopicContentTextPreset
  actions: TopicContentActionsPreset
}

export const topicContentPreset: TopicContentPreset = {
  ncss: {
    label: 'topic-content',
    display: 'flex',
    flexDirection: 'column',
  },
  text: topicContentTextPreset,
  actions: topicContentActionsPreset,
}
