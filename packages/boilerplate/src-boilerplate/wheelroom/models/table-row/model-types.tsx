import { ActionProps } from '../action/model-types'
import { TopicProps } from '../topic/model-types'

export interface TableRowProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: ActionProps[]
  topics?: TopicProps[]
}
