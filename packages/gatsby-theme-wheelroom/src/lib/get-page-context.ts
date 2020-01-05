import { ContentfulObject, GetPageContext, PageContext } from '../types/context'
import { getLocale } from './locales'

export const getPageContext = ({
  context,
  page,
  subPage,
  pageType,
}: GetPageContext): PageContext => {
  const pageContext = {
    locale: page.node_locale,
    namedPaths: context.namedPaths,
  } as PageContext

  // Add global ids
  if (Object.keys(context.queries.global).length > 0) {
    Object.entries(context.queries.global).forEach(([globalsName, globals]) => {
      globals.forEach((globalsItem: ContentfulObject) => {
        const globalsLocale = globalsItem.node.node_locale
        if (globalsLocale === page.node_locale) {
          pageContext[globalsName + 'Id'] = globalsItem.node.id
        }
      })
    })
  }
  // Add page id
  pageContext[pageType + 'Id'] = page.id

  // Add subPage id
  if (subPage) {
    pageContext[page.pathName + 'Id'] = subPage.node.id
  }
  return pageContext
}
