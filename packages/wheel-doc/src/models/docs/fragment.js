/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: docs
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment Docs on ContentfulDocs {
  __typename
  heading
  slug
  text {
    json
  }
  parentDocs {
    __typename
    heading
    slug
  }
  sortOrder
}
`
