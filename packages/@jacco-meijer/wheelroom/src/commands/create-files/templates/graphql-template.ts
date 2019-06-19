export const graphqlTemplate = `

export const query = \`
{
  articleContent: allContentfulArticleContent(
    limit: 10
  ) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
\`

export const fragment = \`
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
\`
`