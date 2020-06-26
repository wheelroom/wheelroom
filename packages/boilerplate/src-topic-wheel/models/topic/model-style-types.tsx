import { NcssObjectProps } from '../../../src-core'
import { TopicMediaWheelStyle } from './topic-media'
import { TopicContentWheelStyle } from './topic-content'

export interface TopicModelNcssTree extends NcssObjectProps {
  /** Media */
  media: TopicMediaWheelStyle
  /** Content */
  content: TopicContentWheelStyle
}
