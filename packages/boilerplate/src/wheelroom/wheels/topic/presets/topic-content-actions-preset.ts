import { NcssProps } from '../../types'

export interface TopicActionsTreeStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Action link or button style */
  link: {
    ncss?: NcssProps
  }
}

export const topicContentActionsPreset: TopicActionsTreeStyle = {
  ncss: {
    label: 'topic-actions',
  },
  link: {
    ncss: {
      label: 'topic-link',
    },
  },
}
