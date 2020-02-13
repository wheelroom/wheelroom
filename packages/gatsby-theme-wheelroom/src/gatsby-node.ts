import { buildNamedPaths } from './lib/build-named-paths'
import { createPages } from './lib/create-pages'
import { createSubPages } from './lib/create-sub-pages'
import { optionsValidator } from './lib/options-validator'
import { runQueries } from './lib/run-queries'
import { Options } from './types/options'
import { buildPathNames } from './lib/build-path-names'
import { getLocales } from './lib/get-locales'

exports.createPages = async ({ graphql, actions }: any, options: Options) => {
  const { createPage } = actions
  const optionsHealth = optionsValidator(options)
  if (optionsHealth.valid) {
    console.log(optionsHealth.message)
  } else {
    throw new Error(optionsHealth.message)
  }

  const queryResults = await runQueries({ graphql, queries: options.queries })
  const locales = getLocales({
    queryResults,
  })
  let defaultLocale = options.defaultLocale
  if (!defaultLocale) {
    console.log(
      `Default locale not set, using locale of first page: ${locales[0]}`
    )
    defaultLocale = locales[0]
  } else if (!locales.includes(defaultLocale)) {
    console.log(
      `Warning: default locale ${defaultLocale} not found, using: ${locales[0]} instead`
    )
    defaultLocale = locales[0]
  } else {
    console.log('Default locale:', defaultLocale)
  }

  const pathNames = buildPathNames({
    defaultLocale,
    queryResults,
  })

  const namedPaths = buildNamedPaths({
    defaultLocale,
    queryResults,
    pathNames,
  })
  const pageTemplate = options.pageTemplate

  createPages({
    createPage,
    defaultLocale,
    namedPaths,
    pageTemplate,
    queryResults,
    pathNames,
  })
  createSubPages({
    createPage,
    defaultLocale,
    namedPaths,
    pageTemplate,
    queryResults,
    pathNames,
  })
}
