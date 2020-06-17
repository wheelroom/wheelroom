/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: table
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Table on ContentfulTable {
    __typename
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
    tableRows {
      ... on Node {
        ...TableRow
      }
    }
  }
`
