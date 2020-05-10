/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: blog
 *
 */

module.exports = {
  componentName: 'blog',
  query: `
  {
    blog: allContentfulBlog {
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
