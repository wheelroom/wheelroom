/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: topic
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment Topic on ContentfulTopic {
  __typename
  title
  heading
  abstract {
    abstract
  }
  image {
    title
    description
    fluid {
      ...GatsbyContentfulFluid
    }
  }
  icon
  actions {
    ... on Node {
      ...Action
    }
  }
}
`
