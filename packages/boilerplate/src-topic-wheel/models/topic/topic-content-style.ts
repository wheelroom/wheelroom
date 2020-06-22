import { NcssProps } from '../../../../src-core'
import { TopicContentActionsWheelStyle } from './topic-content-actions-style'
import { TopicContentTextWheelStyle } from './topic-content-text-style'

export interface TopicContentWheelStyle {
  /** Wrapper around all content including action */
  ncss: NcssProps
  text: TopicContentTextWheelStyle
  actions: TopicContentActionsWheelStyle
}
