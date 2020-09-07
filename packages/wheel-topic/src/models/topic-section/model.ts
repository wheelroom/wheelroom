import { TopicOptionString } from '../../lib/get-topic-options'
import { TopicModel } from '../topic/model'
import { CoreSectionProps } from '@wheelroom/core'

export interface TopicSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  topicOptions?: TopicOptionString[]
  topics?: TopicModel[]
  variation?: string
}
