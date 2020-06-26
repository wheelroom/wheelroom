import { NcssNode } from '../../../src-core'
import { TopicMediaWheelStyle } from './topic-media'
import { TopicContentWheelStyle } from './topic-content'

export interface TopicModelNcssTree extends NcssNode {
  /** Media */
  media: TopicMediaWheelStyle
  /** Content */
  content: TopicContentWheelStyle
}
