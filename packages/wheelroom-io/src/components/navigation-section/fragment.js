/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: navigationSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment NavigationSection on ContentfulNavigationSection {
  __typename
  title
  variation
  topic {
    __typename
    title
    heading
    abstract {
      abstract
    }
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    icon
  }
  navigation {
    __typename
    title
    path
    navigationHeading
    seoTitle
    seoDescription
  }
}
`
