import { QueryResults, ContentfulEdge } from '../types/contentful'

interface GetLocales {
  /** Results from Contentful query */
  queryResults: QueryResults
}

/**
 * Scan pages and collect locales
 */
export const getLocales = (context: GetLocales): string[] => {
  const localeList = context.queryResults.page.page
    .map((edge: ContentfulEdge) => edge.node.node_locale)
    .filter(
      (locale: string, index: number, result: string[]) =>
        result.indexOf(locale) === index
    )
  return localeList
}
