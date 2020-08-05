/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: customSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment CustomSection on ContentfulCustomSection {
    __typename
    variation
    section {
      ... on Node {
        ...Custom
      }
    }
    eventId
  }
`
