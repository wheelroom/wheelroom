import { ContentfulEdge, QueryResults } from '../types/contentful'
import { NamedPaths, PathNames } from '../types/named-paths'

interface BuildNamedPaths {
  /** Results from Contentful query */
  queryResults: QueryResults
  defaultLocale: string
  pathNames: PathNames
}

export const buildNamedPaths = (context: BuildNamedPaths): NamedPaths => {
  console.log(`Building named paths`)
  const namedPaths: NamedPaths = {}
  context.queryResults.page.page.forEach((edge: ContentfulEdge) => {
    const page = edge.node
    const pathName: string = context.pathNames[page.path]
    if (!(pathName in namedPaths)) {
      namedPaths[pathName] = {}
    }
    const locale = page.node_locale
    const localizedBasePath =
      locale === context.defaultLocale ? page.path : '/' + locale + page.path

    // Strip trailing slashes
    namedPaths[pathName][locale] = localizedBasePath
      .toLowerCase()
      .replace(/(.)\/$/, '$1')
  })
  return namedPaths
}
