import { NcssProps } from '../../../src-core'
import { TopicMediaWheelStyle } from './topic-media'
import { TopicContentWheelStyle } from './topic-content'

export interface TopicModelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Media */
  media: TopicMediaWheelStyle
  /** Content */
  content: TopicContentWheelStyle
}
