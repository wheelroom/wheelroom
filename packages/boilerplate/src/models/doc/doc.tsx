/**
 * Component interface only
 *
 * Component type: doc
 *
 */

import { TopicProps } from '../topic/topic'

export interface DocProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  slug: string
  navigationHeading: string
  text: {
    json: string
  }
  topics: TopicProps[]
  parent: DocProps
}
