export const output = `
# subPage query
export const query = \`
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
\`

# global query
export const query = \`
{
  globals: allContentfulGlobals(
    limit: 10
  ) {
    edges {
      node {
        id
        node_locale
      }
    }
  }
}
\`

# page query
export const query = \`
{
  page: allContentfulPage {
    edges {
      node {
        id
        node_locale
        path
        pathName
      }
    }
  }
}
\`

# Article fragment
export const fragment = \`
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
\`

# ArticlesSection fragment
export const fragment = \`
  fragment ArticlesSection on ContentfulArticlesSection {
    __typename
    heading
    maxArticles
    articles {
      ... on Node {
        ...Article
      }
    }
    variation
  }
\`

# FeaturedPage fragment
export const fragment = \`
  fragment FeaturedPageSection on ContentfulFeaturedPageSection {
    __typename
    heading
    text {
      text
    }
    featuredPage {
      navigationTitle
      pathName
    }
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    variation
  }
\`
`
