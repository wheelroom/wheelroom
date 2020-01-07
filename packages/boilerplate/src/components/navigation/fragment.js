/**
 * Graphql fragment definition
 *
 * Component: navigation
 */

export const fragment = `
fragment Navigation on ContentfulNavigation {
  routes {
    ... on Node {
      ...Page
    }
  }
  __typename
  title
}
`
