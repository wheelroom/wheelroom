import { TableModelProps } from '../table/model-types'
import { TopicOptions } from '../../../src-topic-wheel'
import { CoreSectionProps } from '../../../src-core'

export interface TableSectionModelProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tables?: TableModelProps[]
  topicOptions?: TopicOptions
  variation?: string
}
