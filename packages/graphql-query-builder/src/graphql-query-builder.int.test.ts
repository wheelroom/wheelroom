import { graphqlQueryBuilder as qb } from './graphql-query-builder'
import { Question } from './types/question'

test('Page question', async () => {
  const question: Question = {
    fields: {
      query: {
        arguments: {
          $articleId: 'String',
          $globalsId: 'String',
          $pageId: 'String',
        },
        fields: {
          site: {
            fields: {
              siteMetadata: {
                fields: {
                  siteVersion: {},
                },
              },
            },
          },
          contentfulPage: {
            alias: 'page',
            arguments: {
              id: '{ eq: $pageId }',
            },
            fields: {
              navigationTitle: {},
              path: {},
              pathName: {},
              seoDescription: {},
              seoTitle: {},
              sections: {
                fields: {
                  Node: {
                    inlineFragment: true,
                    fields: {
                      ArticleSection: { fragment: true },
                      ArticlesSection: { fragment: true },
                      AuthorSection: { fragment: true },
                      FeaturedPageSection: { fragment: true },
                      FooterSection: { fragment: true },
                      OpenerSection: { fragment: true },
                    },
                  },
                },
              },
            },
          },
          allContentfulArticle: {
            alias: 'allArticles',
            arguments: {
              filter: '{ node_locale: { eq: "en-US" } }',
              sort: '{ fields: date, order: DESC }',
              limit: '10',
            },
            fields: {
              edges: {
                fields: {
                  node: {
                    fields: {
                      Article: { fragment: true },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }

  const graphQL = `{
  query(
    $articleId: String
    $globalsId: String
    $pageId: String
  ) {
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
        }
      }
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
}`

  expect(qb(question)).toEqual(graphQL)
})

test('Operation name and type', async () => {
  const question: Question = {
    fields: {
      firstName: {},
      lastName: {},
    },
    operationName: 'firstAndLastName',
    operationType: 'query',
  }

  const graphQL = `query firstAndLastName {
  firstName
  lastName
}`

  expect(qb(question)).toEqual(graphQL)
})

test('Fragment', async () => {
  const question: Question = {
    fields: {
      firstName: {},
      lastName: {},
    },
    fragment: {
      name: 'Article',
      on: 'ContentfulArticle',
    },
    indentLevel: 2,
  }

  const graphQL = `    fragment Article on ContentfulArticle {
      firstName
      lastName
    }`

  expect(qb(question)).toEqual(graphQL)
})

test('Operation type, arguments and directive', async () => {
  const question: Question = {
    fields: {
      firstName: {
        fields: {
          oneMore: {},
        },
        arguments: {
          id: '4',
        },
      },
      lastName: {
        directive: {
          name: '@include',
          value: 'if: $withFriends',
        },
      },
    },
    indentLevel: 1,
    operationType: 'query',
  }

  const graphQL = `  query {
    firstName(id: 4) {
      oneMore
    }
    lastName @include(if: $withFriends)
  }`

  expect(qb(question)).toEqual(graphQL)
})
