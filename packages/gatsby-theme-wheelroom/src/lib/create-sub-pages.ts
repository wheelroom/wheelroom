import { Context } from '../types/context'
import { getPageContext } from './get-page-context'
import { getDefaultLocale, getLocale } from './locales'

export const createSubPages = (context: Context) => {
  console.log(`Creating sub pages`)
  Object.entries(context.queries.page).forEach(([pageType, pageEdge]) => {
    pageEdge.forEach(edge => {
      const page = edge.node
      const pageLocale = page.node_locale
      const localizedBasePath = context.namedPaths[page.pathName][pageLocale]
      // Build sub pages if we find a fieldname like %slug%
      const tokens = localizedBasePath.split('%')
      if (tokens.length !== 3) {
        return
      }
      const templateVar = tokens[1]
      tokens.splice(1, 1)

      const pathsDone: string[] = []
      context.queries.subPage[page.pathName].forEach(subPage => {
        if (!subPage.node.node_locale) {
          console.log(
            `Using default locale for subPage ${subPage.node[templateVar]}`
          )
        }
        const subPageLocale =
          subPage.node.node_locale || getDefaultLocale(context)

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
          component: context.options.pageTemplate,
          context: getPageContext({ context, page, subPage, pageType }),
          path: pagePath,
        })
        pathsDone.push(pagePath)
      })
    })
  })
}
