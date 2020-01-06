import { buildNamedPaths } from './lib/build-named-paths'
import { createPages } from './lib/create-pages'
import { createSubPages } from './lib/create-sub-pages'
import { optionsValidator } from './lib/options-validator'
import { runQueries } from './lib/run-queries'
import { Options } from './types/options'

exports.createPages = async ({ graphql, actions }: any, options: Options) => {
  const { createPage } = actions
  const defaultLocale = options.defaultLocale || 'en-US'
  const optionsHealth = optionsValidator(options)
  if (optionsHealth.valid) {
    console.log(optionsHealth.message)
  } else {
    throw new Error(optionsHealth.message)
  }

  const queryResults = await runQueries({ graphql, queries: options.queries })
  const namedPaths = buildNamedPaths({
    defaultLocale,
    queryResults,
  })
  const pageTemplate = options.pageTemplate

  createPages({
    createPage,
    defaultLocale,
    namedPaths,
    pageTemplate,
    queryResults,
  })
  createSubPages({
    createPage,
    defaultLocale,
    namedPaths,
    pageTemplate,
    queryResults,
  })
}
