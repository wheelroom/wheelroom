import { Context } from '../types/context'
import { getPageContext } from './get-page-context'
import { getLocale } from './locales'

interface CreatePages {
  createPage(params: object): Promise<any>

}


export const createPages = (context: Context) => {
  console.log(`Creating pages`)
  Object.entries(context.queries.page).forEach(([pageType, pageEdge]) => {
    pageEdge.forEach(edge => {
      const page = edge.node
      const locale = page.node_locale
      const localizedBasePath = context.namedPaths[page.pathName][locale]

      const tokens = localizedBasePath.split('%')
      if (tokens.length === 3) {
        return
      }

      console.log(`Creating page: ${localizedBasePath}`)
      context.createPage({
        component: context.options.pageTemplate,
        context: getPageContext({ context, page, pageType }),
        path: localizedBasePath,
      })
    })
  })
}
