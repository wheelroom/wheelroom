import { graphql } from 'gatsby'

export const SectionArticleQuery = graphql`
  fragment SectionArticle on ContentfulSectionArticle {
    articleText {
      articleText
    }
    variation
  }
`
