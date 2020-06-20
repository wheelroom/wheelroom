import { TableProps } from '../table/model-types'
import { TopicOptions } from '../../../src-topic-wheel'
import { CoreSectionProps } from '../../../src-core'

export interface TableSectionProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tables?: TableProps[]
  topicOptions?: TopicOptions
  variation?: string
}
