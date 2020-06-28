import { TopicOptions } from '../../../src-topic-wheel'
import { CoreSectionProps } from '../../../src-core'
import { TableRowModel } from '../table-row/model'

export interface TableSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tableRows?: TableRowModel[]
  topicOptions?: TopicOptions
  variation?: string
}
