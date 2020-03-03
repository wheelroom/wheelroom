/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: page
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment Page on ContentfulPage {
  __typename
  title
  path
  sections {
    ... on Node {
      ...FooterSection
      ...ListSection
      ...OpenerSection
      ...QuoteSection
      ...TextSection
    }
  }
  heading
  navigationHeading
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
  seoTitle
  seoDescription
}
`
