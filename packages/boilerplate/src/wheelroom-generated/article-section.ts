import { graphql } from 'gatsby'
export const fragment = graphql`

fragment ArticleSection on ContentfulArticleSection {
  __typename
  articleText {
    articleText
  }
  variation
}
`
