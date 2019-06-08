export const query = `
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
`
