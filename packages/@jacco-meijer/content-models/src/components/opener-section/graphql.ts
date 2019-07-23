/**
 * Graphql definitions
 *
 * Component type: openerSection
 * Wheelroom type: section
 *
 */

export const fragment = `
  fragment OpenerSection on ContentfulOpenerSection {
    __typename
    heading
    lightHeading
    preHeading
    subHeading
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    navigation {
      ...Navigation
    }    
    variation
  }
`
