/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: topicRow
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment TopicRow on ContentfulTopicRow {
  __typename
  title
  heading
  abstract {
    abstract
  }
  icon
  actions {
    ... on Node {
      ...Action
    }
  }
  topics {
    ... on Node {
      ...Topic
    }
  }
}
`
