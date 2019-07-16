/**
 * Graphql definitions
 *
 * Component type: myNewGlobal
 * Wheelroom type: global
 *
 */

export const fragment = `
  fragment MyNewGlobal on ContentfulMyNewGlobal {
    author
    bodyText
    heading
    variation

  }
`

export const query = `
{
  myNewGlobal: allContentfulMyNewGlobal(
    limit: 10
  ) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`
