import { NcssProps } from '../../../../src-core'
import { TopicContentWheelStyle } from './topic-content-style'
import { TopicMediaWheelStyle } from './topic-media-style'

export interface TopicWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Media */
  media: TopicMediaWheelStyle
  /** Content */
  content: TopicContentWheelStyle
}
