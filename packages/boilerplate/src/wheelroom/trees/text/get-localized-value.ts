/**
 * Content is automatically filled with the default locale (en-US here)
 * if no content is present. This is not the case for assets.
 */

// Get the plain value, if it is localized, get the localized value
export const getLocalizedValue = (locale: string, value: any) => {
  if (typeof value === 'object' && locale in value) {
    return value[locale]
  } else {
    return value
  }
}
