/**
 * Graphql definitions
 *
 * Component type: myNewSubPage
 * Wheelroom type: subPage
 *
 */

export const fragment = `
  fragment MyNewSubPage on ContentfulMyNewSubPage {
    author
    bodyText
    heading
    variation

  }
`

export const query = `
{
  myNewSubPage: allContentfulMyNewSubPage(
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
