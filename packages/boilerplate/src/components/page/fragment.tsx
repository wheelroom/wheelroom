/**
 * Graphql fragment definition
 *
 * Component: page
 */

export const fragment = `
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
