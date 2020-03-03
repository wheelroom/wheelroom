/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: quoteSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment QuoteSection on ContentfulQuoteSection {
  __typename
  title
  heading
  subHeading
  abstract {
    abstract
  }
  image {
    title
    description
    fluid(maxWidth: 2560) {
      sizes
      src
      srcSet
    }
  }
}
`
