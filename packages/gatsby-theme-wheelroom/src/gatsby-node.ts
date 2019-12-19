import { getComponents } from '@jacco-meijer/wheelroom'
import { buildNamedPaths } from './lib/build-named-paths.js'
import { createPages } from './lib/create-pages.js'
import { createSubPages } from './lib/create-sub-pages.js'
import { runQueries } from './lib/run-queries.js'
import { Context } from './types/context.js'

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  // const config = await readConfig()
  const components = await getComponents()
  // const allPluginOptions = await getPluginOptions(config)
  // const wheelroomPluginOptions = allPluginOptions['gatsby-theme-wheelroom']

  const context = {
    components,
    createPage,
    graphql,
    namedPaths: {},
    options,
    queries: {
      global: {},
      page: {},
      subPage: {},
    },
  } as Context

  await runQueries(context)
  buildNamedPaths(context)
  createPages(context)
  createSubPages(context)
}
