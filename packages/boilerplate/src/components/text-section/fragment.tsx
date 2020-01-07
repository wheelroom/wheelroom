/**
 * Graphql fragment definition
 *
 * Component: textSection
 */

export const fragment = `
fragment TextSection on ContentfulTextSection {
  text {
    text
  }
  __typename
  title
}
`
