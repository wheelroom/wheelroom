import { CoreSectionProps } from '@wheelroom/core'
import { TopicOptionString } from '../../lib/get-topic-options'
import { TopicModel } from '../topic/model'

export interface TopicSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  theme?: string
  topicOptions?: TopicOptionString[]
  topics?: TopicModel[]
  variation?: string
}
