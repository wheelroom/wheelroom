export const query = `
{
  page: allContentfulPage {
    edges {
      node {
        id
        node_locale
        path
        pathName
      }
    }
  }
}
`
