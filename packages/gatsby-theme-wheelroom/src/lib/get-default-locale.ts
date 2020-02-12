import { QueryResults } from '../types/contentful'

interface GetDefaultLocale {
  /** Results from Contentful query */
  queryResults: QueryResults
}

/**
 * Get locale from first page. If no pages are defined there's no need for a
 * locale. In that case return en-US anyway.
 * 
 */
export const getDefaultLocale = (context: GetDefaultLocale): string => {
  if (context.queryResults.page.page.length > 0) {
    console.log('Default locale not set, using locale of first page')
    return context.queryResults.page.page[0].node.node_locale
  } else {
    return 'en-US'
  }
}
