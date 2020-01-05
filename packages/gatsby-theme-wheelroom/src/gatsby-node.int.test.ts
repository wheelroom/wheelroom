import { Options } from './types/options'

const gatsbyNode = require('./gatsby-node')
const articleQuery = require('./fixtures/article-query')
const globalsQuery = require('./fixtures/globals-query')
const pageQuery = require('./fixtures/page-query')

const graphqlMock = (query: string) => {
  console.log('graphqlMock', query)
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

describe('Gatsby node should', () => {
  test('Run', async () => {
    expect(await gatsbyNode.createPages(...params)).toBe(true)
  })
})
