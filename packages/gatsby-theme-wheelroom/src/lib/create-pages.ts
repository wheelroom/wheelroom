import { ContentfulEdge, QueryResults } from '../types/contentful'
import { NamedPaths, PathNames } from '../types/named-paths'
import { getPageContext } from './get-page-context'

interface CreatePages {
  defaultLocale: string
  namedPaths: NamedPaths
  pageTemplate: string
  queryResults: QueryResults
  createPage(params: object): Promise<any>
  pathNames: PathNames
}

export const createPages = (context: CreatePages) => {
  console.log(`Creating pages`)
  Object.entries(context.queryResults.page).forEach(
    ([componentName, pageEdge]: [string, ContentfulEdge[]]) => {
      pageEdge.forEach(edge => {
        const page = edge.node
        const pathName = context.pathNames[page.path]
        const locale = page.node_locale || context.defaultLocale
        const localizedBasePath = context.namedPaths[pathName][locale]
        const tokens = localizedBasePath.split(':slug')
        if (tokens.length > 1) {
          // :slug was found
          return
        }
        console.log(`Creating page: ${localizedBasePath}`)
        context.createPage({
          component: context.pageTemplate,
          context: getPageContext({
            componentName,
            locale,
            namedPaths: context.namedPaths,
            page,
            queryResults: context.queryResults,
          }),
          path: localizedBasePath,
        })
      })
    }
  )
}
