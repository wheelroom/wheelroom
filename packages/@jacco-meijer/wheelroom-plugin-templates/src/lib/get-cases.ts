import * as camelCaser from 'camelcase'
import { camelToDash, firstUpper } from './helpers'

export const getCases = (anyCase: string) => {
  const camelCase = camelCaser(anyCase)
  const pascalCase = camelCaser(anyCase, {
    pascalCase: true,
  })
  const dashCase = camelToDash(camelCase)
  const firstUpperCase = firstUpper(anyCase)
  return {
    camelCase,
    dashCase,
    firstUpperCase,
    pascalCase,
  }
}
