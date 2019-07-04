/**
 * Graphql definitions
 *
 * Component type: articlesSection
 * Wheelroom type: section
 *
 */

export const fragment = `
  fragment ArticlesSection on ContentfulArticlesSection {
    __typename
    heading
    maxArticles
    articles {
      ... on Node {
        ...Article
      }
    }
    variation
  }
`
