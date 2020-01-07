/**
 * Graphql fragment definition
 *
 * Component: listSection
 */

export const fragment = `
fragment ListSection on ContentfulListSection {
  heading
  listItems {
    ... on Node {
      ...Page
    }
  }
  variation
  __typename
  title
}
`
