/**
 * Graphql definitions
 *
 * Component type: myNewComponent
 * Wheelroom type: subPage
 *
 */

export const fragment = `
  fragment MyNewComponent on ContentfulMyNewComponent {
    author
    bodyText
    heading
    variation

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

