/**
 * Component
 *
 * Component type: topicTable
 *
 */

import { ActionProps } from '../action/action'
import { TopicRowProps } from '../topic-row'

export interface TopicTableProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  icon: string | JSX.Element
  actions: ActionProps[]
  rows: TopicRowProps[]
}
