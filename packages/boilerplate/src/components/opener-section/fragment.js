/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: openerSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment OpenerSection on ContentfulOpenerSection {
  boxBackgroundColor
  heading
  image {
    title
    description
    fluid(maxWidth: 1024) {
      sizes
      src
      srcSet
    }
  }
  infoText {
    infoText
  }
  mainNavigation {
    ... on Node {
      ...Navigation
    }
  }
  variation
  __typename
  title
}
`
