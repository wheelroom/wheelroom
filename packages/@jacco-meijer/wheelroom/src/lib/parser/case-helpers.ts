export const firstUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)
export const camelToKebab = (str: string): string =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
export const camelToSpaces = (str: string): string =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ').toLowerCase()
export const noTrailingSlash = (str: string): string => str.replace(/\/$/, '')

const escapeRegExp = (str: string) => {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}
export const replaceAll = (str: string, find: string, replace: string) => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
}
