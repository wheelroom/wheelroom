import { NcssProps } from '../../elements/types'
import { topicContentTextStyle } from './topic-content-text-style'
import { topicContentActionsStyle } from './topic-content-actions-style'

export interface TopicContentTreeStyle {
  /** Wrapper around all content including action */
  ncss?: NcssProps
  contentText?: {
    ncss?: NcssProps
  }
  contentActions?: {
    ncss?: NcssProps
  }
}

export const topicContentStyle: TopicContentTreeStyle = {
  ncss: {},
  contentText: {
    ncss: topicContentTextStyle,
  },
  contentActions: {
    ncss: topicContentActionsStyle,
  },
}
