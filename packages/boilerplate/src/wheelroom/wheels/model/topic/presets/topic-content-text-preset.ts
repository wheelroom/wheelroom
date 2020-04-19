import { NcssProps } from '../../../types'

export interface TopicContentTextWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  icon: NcssProps
  heading: NcssProps
  abstract: NcssProps
}

export const topicContentTextWheelStyle: TopicContentTextWheelStyle = {
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
