/* eslint-disable prettier/prettier */
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
  __typename
  title
  variation
  navigation {
    ... on Node {
      ...Navigation
    }
  }
  boxBackgroundColor
  heading
  image {
    title
    description
    fluid(maxWidth: 2560) {
      sizes
      src
      srcSet
    }
  }
  abstract {
    abstract
  }
}
`
