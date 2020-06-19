import {
  TopicOptionString,
  TopicOptionStringNl,
} from '../../lib/get-topic-options'
import { TopicProps } from '../topic/model-types'
import { CoreSectionProps } from '../../../src-core'

export interface TopicSectionProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  topicOptions?: (TopicOptionString | TopicOptionStringNl)[]
  topics?: TopicProps[]
  variation?: string
}
