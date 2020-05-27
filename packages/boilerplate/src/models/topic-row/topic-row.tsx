/**
 * Component
 *
 * Component type: topicRow
 *
 */

import { ActionProps } from '../action/action'
import { TopicProps } from '../topic/topic'

export interface TopicRowProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  icon: string | JSX.Element
  actions: ActionProps[]
  topics: TopicProps[]
}
