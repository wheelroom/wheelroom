import { SectionProps } from '../../../page-template/section-props'
import {
  TopicOptionString,
  TopicOptionStringNl,
} from '../../lib/get-topic-options'
import { TopicProps } from '../topic/model-types'

export interface PageSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  topicOptions?: (TopicOptionString | TopicOptionStringNl)[]
  topics?: TopicProps[]
  variation?: string
}
