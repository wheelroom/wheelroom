/**
 * Graphql fragment definition
 *
 * Component: quoteSection
 */

export const fragment = `
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
