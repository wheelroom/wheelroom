import { Options } from './types/options'

// eslint:disable-next-line: no-var-requires
const gatsbyNode = require('./gatsby-node')
// eslint:disable-next-line: no-var-requires
const articleQuery = require('./fixtures/article-query')
// eslint:disable-next-line: no-var-requires
const globalsQuery = require('./fixtures/globals-query')
// eslint:disable-next-line: no-var-requires
const pageQuery = require('./fixtures/page-query')

const graphqlMock = (query: string) => {
  console.log('graphqlMock', query)
  return {
    data: {
      article: { edges: [] },
      globals: { edges: [] },
      page: { edges: [] },
    },
  }
}

interface CreatePageMock {
  component: any
  context: any
  path: string
}

const createPageMock = (p: CreatePageMock) => {
  console.log('createPageMock', p.path, p.context, p.component)
}

const options: Options = {
  defaultLocale: 'nl-NL',
  pageTemplate: '<html>Hello</html>',
  queries: [articleQuery, globalsQuery, pageQuery],
}

const params = [
  { graphql: graphqlMock, actions: { createPage: createPageMock } },
  options,
]
/**
 * Properly mocking all functionality requires some work. For now we only test
 * for code that runs ;-)
 */
describe('Gatsby node should', () => {
  test('run without errors', async () => {
    expect(await gatsbyNode.createPages(...params)).toBeUndefined()
  })
})
