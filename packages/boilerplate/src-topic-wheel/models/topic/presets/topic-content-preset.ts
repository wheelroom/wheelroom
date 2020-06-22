import { NcssProps } from '../../../../src-core'
import { TopicContentActionsWheelStyle } from './topic-content-actions-preset'
import { TopicContentTextWheelStyle } from './topic-content-text-preset'

export interface TopicContentWheelStyle {
  /** Wrapper around all content including action */
  ncss: NcssProps
  text: TopicContentTextWheelStyle
  actions: TopicContentActionsWheelStyle
}
