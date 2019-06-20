/**
 * Graphql definitions
 *
 * Component type: myNewComponent
 * Wheelroom type: global
 *
 */

export const fragment = `
  fragment MyNewComponent on ContentfulMyNewComponent {
    author
    bodyText
    heading

  }
`

export const query = `
{
  myNewComponent: allContentfulMyNewComponent(
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

