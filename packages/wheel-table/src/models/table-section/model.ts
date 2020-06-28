import { TopicOptions } from '@wheelroom/wheel-topic'
import { CoreSectionProps } from '@wheelroom/core'
import { TableRowModel } from '../table-row/model'

export interface TableSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tableRows?: TableRowModel[]
  topicOptions?: TopicOptions
  variation?: string
}
