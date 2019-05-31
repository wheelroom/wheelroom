import { graphql } from 'gatsby'
import { ArticleSection } from './article-section'

export { ArticleSection as ArticleSectionGatsby }

export const query = graphql`
  fragment ArticleSection on ContentfulArticleSection {
    articleText {
      articleText
    }
    variation
  }
`
