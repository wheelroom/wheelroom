import { NcssProps } from '../../types'

export interface TopicContentTextPreset {
  /** Styling for this node */
  ncss: NcssProps
  icon: NcssProps
  heading: NcssProps
  abstract: NcssProps
}

export const topicContentTextPreset: TopicContentTextPreset = {
  ncss: {
    label: 'topic-text',
  },
  icon: {
    ncss: {
      label: 'topic-icon',
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
