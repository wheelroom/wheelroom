import { NcssProps } from '../../types'

export interface TopicContentTextTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Icon style */
  icon?: {
    ncss?: NcssProps
  }
  /** Heading style */
  heading?: {
    ncss?: NcssProps
  }
  /** Abstract style */
  abstract?: {
    ncss?: NcssProps
  }
}

export const topicContentTextPreset: TopicContentTextTreeStyle = {
  ncss: {
    label: 'topic-text',
  },
  icon: {
    ncss: {
      label: 'topic-icon',
      mb: 2,
    },
  },
  heading: {
    ncss: {
      label: 'topic-heading',
    },
  },
  abstract: {
    ncss: {
      label: 'topic-abstract',
    },
  },
}
