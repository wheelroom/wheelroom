import { NcssProps } from '../elements/types'

export interface TopicContentTextTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
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
