/**
 * Graphql definitions
 *
 * Component type: myNewPart
 * Wheelroom type: part
 *
 */

export const fragment = `
  fragment MyNewPart on ContentfulMyNewPart {
    author
    bodyText
    heading
    variation

  }
`
