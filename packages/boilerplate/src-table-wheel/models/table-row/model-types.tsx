import { ActionModelProps } from '../../../src-core'
import { TopicModelProps } from '../../../src-topic-wheel'

export interface TableRowProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: ActionModelProps[]
  topics?: TopicModelProps[]
}
