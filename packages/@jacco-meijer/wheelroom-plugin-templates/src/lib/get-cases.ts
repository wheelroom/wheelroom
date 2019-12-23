import * as camelCaser from 'camelcase'
import { camelToKebab, camelToSpaces, firstUpperCase } from './helpers.js'

export const getCases = (anyCase: string) => {
  const camelCase = camelCaser(anyCase)
  const pascalCase = camelCaser(anyCase, {
    pascalCase: true,
  })
  const kebabCase = camelToKebab(camelCase)
  const lowerCase = camelToSpaces(anyCase)
  const sentenceCase = firstUpperCase(lowerCase)
  return {
    camelCase,
    kebabCase,
    lowerCase,
    pascalCase,
    sentenceCase,
  }
}
