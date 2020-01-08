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
