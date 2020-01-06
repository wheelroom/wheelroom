/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: article
 *
 */

module.exports = {
  componentName: 'article',
  query: `
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
  `,
  type: 'subPage',
}
