/**
 * Graphql definitions
 *
 * Component type: articleSection
 * Wheelroom type: section
 *
 */

export const fragment = `
  fragment ArticleSection on ContentfulArticleSection {
    __typename
    articleText {
      articleText
    }
    variation
  }
`
