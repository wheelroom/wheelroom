import {
  TopicOptionString,
  TopicOptionStringNl,
} from '../../lib/get-topic-options'
import { TopicModel } from '../topic/model'
import { CoreSectionProps } from '@wheelroom/core'

export interface TopicSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  topicOptions?: (TopicOptionString | TopicOptionStringNl)[]
  topics?: TopicModel[]
  variation?: string
}
