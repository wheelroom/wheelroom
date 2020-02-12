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
  avatar {
    title
    description
    fluid(maxWidth: 1024) {
      sizes
      src
      srcSet
    }
  }
  heading
  subHeading
  text {
    text
  }
  __typename
  title
}
`
