import { createParser } from '@jacco-meijer/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { componentFragmentFunc } from './component-fragment'
jest.setTimeout(10000)

describe('Graphql parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(componentFragmentFunc)

  test('article fragment', async () => {
    parser.updateVars(replaceVars.article)
    expect(
      parser.parse(`
    export const fragment = \`
%componentFragment(prefix:Contentful, indent:6)%
    \``)
    ).toStrictEqual(`
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
    \``)
  })

  test('articles sections fragment', async () => {
    parser.updateVars(replaceVars.articlesSection)
    expect(
      parser.parse(`
    export const fragment = \`
%componentFragment(prefix:Contentful, indent:6)%
    \``)
    ).toStrictEqual(
      `
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
    )
  })

  test('featured page section fragment', async () => {
    parser.updateVars(replaceVars.featuredPageSection)
    expect(
      parser.parse(`
    export const fragment = \`
%componentFragment(prefix:Contentful, indent:6)%
\``)
    ).toStrictEqual(`
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
\``)
  })
})
