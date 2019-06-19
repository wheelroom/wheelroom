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

export const fragment = `
  fragment MyNewComponent on ContentfulMyNewComponent {
     author
     bodyText
     heading

  }
`
