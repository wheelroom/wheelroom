/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: embed
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Embed on ContentfulEmbed {
    __typename
    code {
      code
    }
    type
  }
`
