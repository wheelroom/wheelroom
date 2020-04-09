import { NcssProps } from '../../elements/types'

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

export const topicContentTextStyle: TopicContentTextTreeStyle = {
  heading: {
    ncss: {
      color: 'purple',
    },
  },
  abstract: {
    ncss: {
      color: 'purple',
    },
  },
}
