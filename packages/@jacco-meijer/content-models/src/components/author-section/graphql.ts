/**
 * Graphql definitions
 *
 * Component type: authorSection
 * Wheelroom type: section
 *
 */

export const fragment = `
  fragment AuthorSection on ContentfulAuthorSection {
    __typename
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    heading
    text {
      text
    }
    variation
  }
`
