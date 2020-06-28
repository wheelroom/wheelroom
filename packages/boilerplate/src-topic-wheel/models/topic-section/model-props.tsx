import {
  TopicOptionString,
  TopicOptionStringNl,
} from '../../lib/get-topic-options'
import { TopicModel } from '../topic/model-props'
import { CoreSectionProps } from '../../../src-core'

export interface TopicSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  topicOptions?: (TopicOptionString | TopicOptionStringNl)[]
  topics?: TopicModel[]
  variation?: string
}
