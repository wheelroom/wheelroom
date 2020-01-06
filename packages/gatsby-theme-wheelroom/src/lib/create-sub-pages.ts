import { ContentfulEdge, QueryResults } from '../types/contentful'
import { NamedPaths } from '../types/named-paths'
import { getPageContext } from './get-page-context'

interface CreateSubPages {
  defaultLocale: string
  namedPaths: NamedPaths
  pageTemplate: string
  queryResults: QueryResults
  createPage(params: object): Promise<any>
}

export const createSubPages = (context: CreateSubPages) => {
  console.log(`Creating sub pages`)
  Object.entries(context.queryResults.page).forEach(
    ([componentName, pageEdge]: [string, ContentfulEdge[]]) => {
      pageEdge.forEach(edge => {
        const page = edge.node
        const pageLocale = page.node_locale || context.defaultLocale
        const localizedBasePath = context.namedPaths[page.pathName][pageLocale]
        // Build sub pages if we find a fieldname like %slug%
        const tokens = localizedBasePath.split('%')
        if (tokens.length !== 3) {
          return
        }
        const templateVar = tokens[1]
        tokens.splice(1, 1)

        const pathsDone: string[] = []
        context.queryResults.subPage[page.pathName].forEach(subPage => {
          if (!subPage.node.node_locale) {
            console.log(
              `Using default locale for subPage ${subPage.node[templateVar]}`
            )
          }
          const subPageLocale =
            subPage.node.node_locale || context.defaultLocale

          if (subPageLocale !== pageLocale) {
            return
          }

          const subPageTokens = tokens.slice()
          subPageTokens.push(subPage.node[templateVar])
          const pagePath = subPageTokens.join('')
          if (pathsDone.includes(pagePath)) {
            return
          }

          console.log(`Creating sub page: ${pagePath}`)
          context.createPage({
            component: context.pageTemplate,
            context: getPageContext({
              componentName,
              locale: subPageLocale,
              namedPaths: context.namedPaths,
              page,
              queryResults: context.queryResults,
            }),
            path: pagePath,
          })
          pathsDone.push(pagePath)
        })
      })
    }
  )
}
