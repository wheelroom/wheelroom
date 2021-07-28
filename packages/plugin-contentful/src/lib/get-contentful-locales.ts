import { Environment } from 'contentful-management/types'

export interface GetContentfulLocales {
  contentfulEnvironment: Environment
}

export const getContentfulLocales = async ({
  contentfulEnvironment,
}: GetContentfulLocales) => {
  const result = await contentfulEnvironment.getLocales()
  const locales = result.items
  const defaultLocale = locales.find((locale: any) => locale.default)
  return { locales, defaultLocale }
}
