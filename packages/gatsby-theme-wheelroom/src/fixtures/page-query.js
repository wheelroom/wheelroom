/**
* Graphql query definition
*
* Query type: page
* Component: page
*
*/

export const componentName = 'page'
export const type = 'page'
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