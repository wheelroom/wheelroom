import { ActionModel } from '@wheelroom/core'
import { TopicModel } from '@wheelroom/wheel-topic'

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
