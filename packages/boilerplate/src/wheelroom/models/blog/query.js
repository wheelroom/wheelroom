/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: blog
 *
 */

// eslint-disable-next-line no-undef
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
