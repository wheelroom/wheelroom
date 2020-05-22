/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: topicTable
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment TopicTable on ContentfulTopicTable {
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
  rows {
    ... on Node {
      ...TopicRow
    }
  }
}
`
