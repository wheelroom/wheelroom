import { graphql } from 'gatsby'
import { ArticleSection } from './article-section'

export { ArticleSection as ArticleSectionGatsby }

export const articleSectionQuery = graphql`
  fragment ArticleSection on ContentfulArticleSection {
    articleText {
      articleText
    }
    variation
  }
`
