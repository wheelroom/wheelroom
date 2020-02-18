import {
  ContentfulEdge,
  ContentfulNode,
  QueryResults,
} from '../types/contentful'
import { NamedPaths } from '../types/named-paths'

interface GetPageContext {
  locale: string
  namedPaths: NamedPaths
  page: ContentfulNode
  subPage?: ContentfulNode
  componentName: string
  queryResults: QueryResults
}

interface PageContext {
  locale: string
  namedPaths: NamedPaths
  [componentTypeIdKey: string]: string | NamedPaths
}

export const getPageContext = (context: GetPageContext): PageContext => {
  const pageContext: PageContext = {
    locale: context.locale,
    namedPaths: context.namedPaths,
  }
  // Add global ids
  if (Object.keys(context.queryResults.global).length > 0) {
    Object.entries(context.queryResults.global).forEach(
      ([globalsName, globals]) => {
        globals.forEach((globalsItem: ContentfulEdge) => {
          const globalsLocale = globalsItem.node.node_locale
          if (globalsLocale === context.page.node_locale) {
            pageContext[globalsName + 'Id'] = globalsItem.node.id
          }
        })
      }
    )
  }
  // Add page id
  pageContext[context.componentName + 'Id'] = context.page.id

  // Add page contentful_id
  pageContext[context.componentName + 'ContentfulId'] = context.page.contentful_id

  // Add subPage id
  if (context.subPage) {
    pageContext[context.page.pathName + 'Id'] = context.subPage.id
  }
  return pageContext
}
