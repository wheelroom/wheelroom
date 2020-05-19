import { NcssProps } from '../../../types'

export interface TopicContentActionsWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Action link or button style */
  link: {
    ncss: NcssProps
    icon: {
      ncss: NcssProps
    }
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
    icon: {
      ncss: {
        label: 'topic-icon',
        w: '15px',
        h: '15px',
        my: 'auto',
        transform: 'translateX(4px)',
      },
    },
  },
}
