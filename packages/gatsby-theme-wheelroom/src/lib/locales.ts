import { Context } from '../types/context'

const defaultLocale = 'en_US'

export const getLocale = (page: any) => {
  return page.node_locale
}

export const getDefaultLocale = (context: Context): string => {
  return context.wheelroomPluginOptions.defaultLocale || defaultLocale
}
