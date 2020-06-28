import { TopicOptions } from '../../../src-topic-wheel'
import { CoreSectionProps } from '../../../src-core'
import { TableRowModelProps } from '../table-row/model-props'

export interface TableSectionModelProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tableRows?: TableRowModelProps[]
  topicOptions?: TopicOptions
  variation?: string
}
