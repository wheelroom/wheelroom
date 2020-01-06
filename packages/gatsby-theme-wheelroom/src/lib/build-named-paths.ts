import { ContentfulEdge, QueryResults } from '../types/contentful'
import { NamedPaths } from '../types/named-paths'

interface BuildNamedPaths {
  /** Results from Contentful query */
  queryResults: QueryResults
  defaultLocale: string
}
export const buildNamedPaths = (context: BuildNamedPaths): NamedPaths => {
  console.log(`Building named paths`)
  const namedPaths: NamedPaths = {}
  context.queryResults.page.page.forEach((edge: ContentfulEdge) => {
    const page = edge.node
    if (!(page.pathName in namedPaths)) {
      namedPaths[page.pathName] = { path: '' }
    }
    namedPaths[page.pathName].path = page.path
    const locale = page.node_locale
    const localizedBasePath =
      locale === context.defaultLocale ? page.path : '/' + locale + page.path

    // Strip trailing slashes
    namedPaths[page.pathName][locale] = localizedBasePath
      .toLowerCase()
      .replace(/(.)\/$/, '$1')
  })
  return namedPaths
}
