// createPageQuery: subPage
export const articleQueryOutput = `
export const query = \`
{
  article: allContentfulArticle(limit: 20) {
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

// createPageQuery: global
export const articlesSectionQueryOutput = `
export const query = \`
{
  articlesSection: allContentfulArticlesSection(limit: 15) {
    edges {
      node {
        id
        node_locale
      }
    }
  }
}
\``

// createPageQuery: page
export const featuredPageSectionQueryOutput = `
export const query = \`
{
  featuredPageSection: allContentfulFeaturedPageSection {
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
    featuredPage {
      ... on Node {
        ...Page
      }
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
    title
  }
\``
