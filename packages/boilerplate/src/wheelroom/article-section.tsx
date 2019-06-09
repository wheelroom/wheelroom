import { graphql } from 'gatsby'
export { ArticleSection } from 'gatsby-theme-wheelroom'

export const fragment = graphql`
  fragment ArticleSection on ContentfulArticleSection {
    articleText {
      articleText
    }
    variation
  }
`
