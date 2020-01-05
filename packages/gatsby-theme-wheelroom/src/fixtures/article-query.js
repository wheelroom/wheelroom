/**
* Graphql query definition
*
* Query type: subPage
* Component: article
*
*/

export const componentName = 'article'
export const type = 'subPage'
export const query = `
{
  article: allContentfulArticle(limit: 10) {
    edges {
      node {
        id
        node_locale
        slug
      }
    }
  }
}
`