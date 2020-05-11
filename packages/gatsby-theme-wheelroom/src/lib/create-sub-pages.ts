import { ContentfulEdge, QueryResults } from '../types/contentful'
import { NamedPaths, PathNames } from '../types/named-paths'
import { getPageContext } from './get-page-context'

interface CreateSubPages {
  defaultLocale: string
  namedPaths: NamedPaths
  pageTemplate: string
  queryResults: QueryResults
  createPage(params: object): Promise<any>
  pathNames: PathNames
}

export const createSubPages = (context: CreateSubPages) => {
  console.log('Creating sub pages')
  Object.entries(context.queryResults.page).forEach(
    ([componentName, pageEdge]: [string, ContentfulEdge[]]) => {
      pageEdge.forEach(edge => {
        const page = edge.node
        const pathName = context.pathNames[page.path]
        const pageLocale = page.node_locale || context.defaultLocale
        const localizedBasePath = context.namedPaths[pathName][pageLocale]
        // Build sub pages if we find :slug in the path
        const pathSplit = localizedBasePath.split(':slug')
        if (pathSplit.length === 1) {
          // :slug was not found
          return
        }
        const subPageComponentName = pathSplit[0].split('/').join('')

        const pathsDone: string[] = []
        context.queryResults.subPage[subPageComponentName].forEach(subPage => {
          if (!subPage.node.slug) {
            console.log(
              `slug field not found in subPage with id ${subPage.node.id}`
            )
          }
          if (!subPage.node.node_locale) {
            console.log(`Using default locale for subPage ${subPage.node.slug}`)
          }
          const subPageLocale =
            subPage.node.node_locale || context.defaultLocale

          if (subPageLocale !== pageLocale) {
            return
          }

          const pagePath = [pathSplit[0], subPage.node.slug, pathSplit[1]].join(
            ''
          )
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
              subPage: subPage.node,
              subPageComponentName,
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
