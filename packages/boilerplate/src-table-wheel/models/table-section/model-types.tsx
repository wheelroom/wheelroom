import { SectionProps } from '../../../page-template/section-props'
import { TableProps } from '../table/model-types'
import { TopicOptions } from '../../lib/get-topic-options'

export interface TableSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tables?: TableProps[]
  topicOptions?: TopicOptions
  variation?: string
}
