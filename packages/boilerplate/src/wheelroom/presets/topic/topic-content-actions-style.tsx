import { NcssProps } from '../../elements/types'

export interface TopicActionsTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Action link or button style */
  link?: {
    ncss?: NcssProps
  }
}

export const topicContentActionsStyle: TopicActionsTreeStyle = {
  ncss: {},
  link: {
    ncss: {},
  },
}
