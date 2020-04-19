/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: navigation
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment Navigation on ContentfulNavigation {
  __typename
  title
  segments {
    ... on Node {
      ...NavigationSegment
    }
  }
  skipToContentHeading
  brandAction {
    ... on Node {
      ...Action
    }
  }
}
`
