/**
 * Graphql fragment definition
 *
 * Component: openerSection
 */

export const fragment = `
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
  mainNavigation
  variation
  __typename
  title
}
`
