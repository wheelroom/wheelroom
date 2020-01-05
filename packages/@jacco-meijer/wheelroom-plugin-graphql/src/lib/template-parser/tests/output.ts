export const subPageQueryOutput = `
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
export const query = \`
{
  globals: allContentfulGlobals(limit: 10) {
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
    createdAt
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    title
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
    title
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
    featuredPage
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
    title
  }
\``

// TODO: Add fields for singleComponent type
/**
 *
 *     featuredPage {
 *       navigationTitle
 *       pathName
 *     }
 *
 */
