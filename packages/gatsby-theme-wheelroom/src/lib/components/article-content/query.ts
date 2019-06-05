export default `
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
