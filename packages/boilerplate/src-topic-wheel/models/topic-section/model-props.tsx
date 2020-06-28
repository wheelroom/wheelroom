import {
  TopicOptionString,
  TopicOptionStringNl,
} from '../../lib/get-topic-options'
import { TopicModelProps } from '../topic/model-props'
import { CoreSectionProps } from '../../../src-core'

export interface TopicSectionModelProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  topicOptions?: (TopicOptionString | TopicOptionStringNl)[]
  topics?: TopicModelProps[]
  variation?: string
}
