import { ActionModel } from '../../../src-core'
import { TopicModel } from '../../../src-topic-wheel'

export interface TableRowModel {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: ActionModel[]
  topics?: TopicModel[]
}
