/**
 * Graphql definitions
 *
 * Component type: article
 * Wheelroom type: subPage
 *
 */

export const fragment = `
  fragment Article on ContentfulArticle {
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

export const query = `
{
  article: allContentfulArticle(
    limit: 10
  ) {
    edges {
      node {
        id
        node_locale
        slug
      }
    }
  }
}
`
