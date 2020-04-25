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
  heading
  abstract {
    abstract
  }
  media {
    title
    description
    fluid (sizes: "(max-width: 2560px, 2560px)") {
      ...GatsbyContentfulFluid
    }
    file {
      url
      fileName
      contentType
    }
  }
  icon
  actions {
    ... on Node {
      ...Action
    }
  }
  __typename
  title
}
`
