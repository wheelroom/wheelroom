/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: doc
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Doc on ContentfulDoc {
    __typename
    heading
    slug
    text {
      json
    }
    parent {
      heading
      slug
    }
    sortOrder
  }
`
