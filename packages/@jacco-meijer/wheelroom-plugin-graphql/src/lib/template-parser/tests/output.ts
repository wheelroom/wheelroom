export const subPageQueryOutput = `
export const type = 'createPageQuery'
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
\``
export const globalQueryOutput = `
export const type = 'createPageQuery'
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
\``
export const pageQueryOutput = `
export const type = 'createPageQuery'
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
\``
export const articleFragmentOutput = `
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
\``
export const articlesSectionFragmentOutput = `
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
\``
export const featuredPageSectionFragmentOutput = `
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