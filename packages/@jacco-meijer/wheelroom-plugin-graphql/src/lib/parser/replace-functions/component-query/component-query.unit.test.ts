import { createParser } from '@jacco-meijer/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { compoentQueryFunc } from './component-query'
jest.setTimeout(10000)

describe('Graphql parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(compoentQueryFunc)

  test('global query', async () => {
    parser.updateVars(replaceVars.articlesSection)
    expect(
      parser.parse(`
export const query = \`
%componentQuery(prefix:allContentful, indent:0)%
\``)
    ).toStrictEqual(
      `
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
    )
  })
  test('page query', async () => {
    parser.updateVars(replaceVars.featuredPageSection)
    expect(
      parser.parse(`
      export const query = \`
%componentQuery(prefix:allContentful, indent:6)%
\``)
    ).toStrictEqual(
      `
      export const query = \`
      {
        featuredPageSection: allContentfulFeaturedPageSection {
          edges {
            node {
              contentful_id
              id
              node_locale
              path
            }
          }
        }
      }
\``
    )
  })
  test('sub page query', async () => {
    parser.updateVars(replaceVars.article)
    expect(
      parser.parse(`
      export const query = \`
%componentQuery(prefix:allContentful, indent:6)%
\``)
    ).toStrictEqual(
      `
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
    )
  })
})
