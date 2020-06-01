/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: docSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment DocSection on ContentfulDocSection {
    __typename
    variation
    docs {
      ... on Node {
        ...Doc
      }
    }
    eventId
  }
`
