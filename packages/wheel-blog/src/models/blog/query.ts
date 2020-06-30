/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: blog
 *
 */

export const blogQuery = {
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
