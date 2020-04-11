/**
 * Content is automatically filled with the default locale (en-US here)
 * if no content is present. This is not the case for assets. If the
 * asset for the locale cannot be found, look for any other locale that
 * works. Not perfect, but good enough when there's only two locales.
 */

export const getAvailableLocale = (
  fields: any,
  localeNames: any,
  testFieldName: string,
  testLocale: string
) => {
  let locale = testLocale
  if (fields[testFieldName][testLocale]) {
    locale = testLocale
  } else {
    Object.keys(localeNames).forEach((tryLocale: string) => {
      if (fields[testFieldName][tryLocale]) {
        locale = tryLocale
      }
    })
  }
  return locale
}
