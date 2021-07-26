export const firstUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)
export const camelToKebab = (str: string): string =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
export const camelToSpaces = (str: string): string =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ').toLowerCase()
export const noTrailingSlash = (str: string): string => str.replace(/\/$/, '')
export const stripDoubleQuotes = (str: string): string => str.replace(/"/g, '')
