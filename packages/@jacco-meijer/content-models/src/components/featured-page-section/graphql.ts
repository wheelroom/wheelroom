/**
 * Graphql definitions
 *
 * Component type: featuredPageSection
 * Wheelroom type: section
 *
 */

export const fragment = `
  fragment FeaturedPageSection on ContentfulFeaturedPageSection {
    __typename
    heading
    text {
      text
    }
    featuredPage {
      navigationTitle
      pathName
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
    variation
  }
`
