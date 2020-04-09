import { NcssProps } from '../../elements/types'
import { TreeStyle } from '../../lib/tree-style'

export interface TopicActionsTreeStyle extends TreeStyle {
  /** Action link or button style */
  link?: NcssProps
}

export const topicContentActionsStyle: TopicActionsTreeStyle = {
  ncss: {},
}
