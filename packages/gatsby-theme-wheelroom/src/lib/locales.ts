import { Context } from '../types/context'

const defaultLocale = 'en-US'

export const getLocale = (page: any) => {
  return page.node_locale
}

export const getDefaultLocale = (context: Context): string => {
  return context.options.defaultLocale || defaultLocale
}
