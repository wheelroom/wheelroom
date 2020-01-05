import { QueryResults } from '../types/contentful'
import { NamedPaths } from '../types/named-paths'
import { getPageContext } from './get-page-context'

interface CreatePages {
  defaultLocale: string
  namedPaths: NamedPaths
  pageTemplate: string
  queryResults: QueryResults
  createPage(params: object): Promise<any>
}

export const createPages = (context: CreatePages) => {
  console.log(`Creating pages`)
  Object.entries(context.queryResults.page).forEach(
    ([componentName, pageEdge]) => {
      pageEdge.forEach(edge => {
        const page = edge.node
        const locale = page.node_locale || context.defaultLocale
        const localizedBasePath = context.namedPaths[page.pathName][locale]
        const tokens = localizedBasePath.split('%')
        if (tokens.length === 3) {
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
