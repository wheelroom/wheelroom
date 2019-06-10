import { graphql } from 'gatsby'
export const fragment = graphql`

fragment ArticleSection on ContentfulArticleSection {
  articleText {
    articleText
  }
  variation
}
`
