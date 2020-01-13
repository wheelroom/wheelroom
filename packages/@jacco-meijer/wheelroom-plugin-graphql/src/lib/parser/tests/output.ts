// asQuery: subPage
export const articleQueryOutput = `
export const query = \`
{
  article: allContentfulArticle(queryLimit: 20) {
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

// asQuery: global
export const articlesSectionQueryOutput = `
export const query = \`
{
  articlesSection: allContentfulArticlesSection(queryLimit: 15) {
    edges {
      node {
        id
        node_locale
      }
    }
  }
}
\``

// asQuery: page
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
    articles {
      ... on Node {
        ...Article
      }
    }
    heading
    maxArticles
    title
    variation
  }
\``
export const featuredPageSectionFragmentOutput = `
export const fragment = \`
  fragment FeaturedPageSection on ContentfulFeaturedPageSection {
    __typename
    featuredPage {
      image {
        title
        description
        fluid(maxWidth: 1024) {
          sizes
          src
          srcSet
        }
      }
      pageHeading
      pageText {
        pageText
      }
    }
    heading
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    text {
      text
    }
    title
    variation
  }
\``
