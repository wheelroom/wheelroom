import {
  getComponents,
  getPluginOptions,
  readConfig,
} from '@jacco-meijer/wheelroom'
import { buildNamedPaths } from './lib/build-named-paths'
import { createPages } from './lib/create-pages'
import { createSubPages } from './lib/create-sub-pages'
import { runQueries } from './lib/run-queries'
import { Context } from './types/context'

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  const config = await readConfig()
  const components = await getComponents(config)
  const allPluginOptions = await getPluginOptions(config)
  const wheelroomPluginOptions = allPluginOptions['gatsby-theme-wheelroom']

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
    wheelroomPluginOptions,
  } as Context

  await runQueries(context)
  buildNamedPaths(context)
  createPages(context)
  createSubPages(context)
}
