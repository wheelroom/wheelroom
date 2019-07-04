/**
 * Graphql definitions
 *
 * Component type: bicycleSection
 * Wheelroom type: section
 *
 */

export const fragment = `
  fragment BicycleSection on ContentfulBicycleSection {
    __typename
    text {
      text
    }
    variation
  }
`
