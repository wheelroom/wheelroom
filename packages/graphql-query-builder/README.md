# graphql-query-builder
Build graphQL queries dynamically


## Page query
```graphql
  query($pageId: String, $articleId: String, $globalsId: String) {
    site {
      siteMetadata {
        siteVersion
      }
    }
    page: contentfulPage(id: { eq: $pageId }) {
      navigationTitle
      path
      pathName
      seoDescription
      seoTitle
      sections {
        ... on Node {
          ...ArticleSection
          ...ArticlesSection
          ...AuthorSection
          ...FeaturedPageSection
          ...FooterSection
          ...OpenerSection
          ...BicycleSection
        }
      }
    }
    article: contentfulArticle(id: { eq: $articleId }) {
      ...Article
    }
    globals: contentfulGlobals(id: { eq: $globalsId }) {
      ...Globals
    }
    allArticles: allContentfulArticle(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: date, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
```

# Main queries
## Article main query -
Gets all articles, looks up slug and returns id
```graphql
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
```

## Page main query
Gets all pages, looks up path and returns id
```graphql
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
```

# Fragments
## Article fragment
```graphql
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
```

## AuthorSection fragment
```graphql
  fragment AuthorSection on ContentfulAuthorSection {
    __typename
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    heading
    text {
      text
    }
    variation
  }
```
