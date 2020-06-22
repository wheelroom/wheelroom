import { NcssProps } from '../../../../src-core'
import { TopicContentWheelStyle } from './topic-content-preset'
import { TopicMediaWheelStyle } from './topic-media-preset'

export interface TopicWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Media */
  media: TopicMediaWheelStyle
  /** Content */
  content: TopicContentWheelStyle
}
