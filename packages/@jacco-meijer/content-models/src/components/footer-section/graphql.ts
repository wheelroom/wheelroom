/**
 * Graphql definitions
 *
 * Component type: footerSection
 * Wheelroom type: section
 *
 */

export const fragment = `
  fragment FooterSection on ContentfulFooterSection {
    __typename
    navigation {
      ...Navigation
    }
    variation
  }
`
