/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: docsSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment DocsSection on ContentfulDocsSection {
    __typename
    variation
    eventId
  }
`
