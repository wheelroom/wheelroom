import { getComponents } from '@jacco-meijer/wheelroom'
import { buildNamedPaths } from './lib/build-named-paths'
import { createPages } from './lib/create-pages'
import { createSubPages } from './lib/create-sub-pages'
import { runQueries } from './lib/run-queries'
import { Context } from './types/context'
import { getPageContext } from './lib/get-page-context'

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  const queryResults = await runQueries(options.queries)
  const namedPaths = buildNamedPaths(context.queryResults)
  const pageTemplate = options.pageTemplate
  const pageContext = getPageContext(queryResults, namedPaths)

  createPages(createPage, pageContext, namedPaths, queryResults.page, pageTemplate) 
  createSubPages(createPage, pageContext, namedPaths, queryResults.subPage, pageTemplate)  
}
