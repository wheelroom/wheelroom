import { NcssProps } from '../../../types'

export interface TopicContentActionsWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Action link or button style */
  link: {
    ncss: NcssProps
  }
}

export const topicContentActionsPreset: TopicContentActionsWheelStyle = {
  ncss: {
    label: 'topic-actions',
  },
  link: {
    ncss: {
      label: 'topic-link',
    },
  },
}
