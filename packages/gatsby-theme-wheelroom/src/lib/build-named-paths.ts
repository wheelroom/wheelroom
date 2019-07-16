import { Context } from '../types/context'
import { getDefaultLocale, getLocale } from './locales'

export const buildNamedPaths = (context: Context) => {
  console.log(`Building named paths`)
  context.queries.page.page.forEach((edge: any) => {
    const page = edge.node
    if (!(page.pathName in context.namedPaths)) {
      context.namedPaths[page.pathName] = { path: '' }
    }
    context.namedPaths[page.pathName].path = page.path
    const locale = getLocale(page)
    const localizedBasePath =
      locale === getDefaultLocale(context)
        ? page.path
        : '/' + locale + page.path

    // Strip trailing slashes
    context.namedPaths[page.pathName][
      locale
    ] = localizedBasePath.toLowerCase().replace(/(.)\/$/, '$1')
  })
}
