import { graphql } from 'gatsby'
import { ArticleContent } from './article-content'

export { ArticleContent as ArticleContentGatsby }

export const query = graphql`
  fragment ArticleContent on ContentfulArticleContent {
    articleText {
      articleText
    }
    author
    createdAt
    date
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    slug
    subTitle
    title
    updatedAt
  }
`
