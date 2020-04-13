import { NcssProps } from '../../types'

export interface TopicContentActionsPreset {
  /** Styling for this node */
  ncss: NcssProps
  /** Action link or button style */
  link: {
    ncss: NcssProps
  }
}

export const topicContentActionsPreset: TopicContentActionsPreset = {
  ncss: {
    label: 'topic-actions',
  },
  link: {
    ncss: {
      label: 'topic-link',
    },
  },
}
