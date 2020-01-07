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
  listItemHeading
  listItemHiddenText
  listItemImage {
    title
    description
    fluid(maxWidth: 1024) {
      sizes
      src
      srcSet
    }
  }
  listItemInfoText {
    listItemInfoText
  }
  listItemView
  navigationHeading
  pageHeading
  pageImage {
    title
    description
    fluid(maxWidth: 1024) {
      sizes
      src
      srcSet
    }
  }
  pageInfoText {
    pageInfoText
  }
  path
  pathName
  sections {
    ... on Node {
      ...FooterSection
      ...ListSection
      ...OpenerSection
      ...QuoteSection
      ...TextSection
    }
  }
  seoDescription
  seoTitle
  __typename
  title
}
`
