import camelcase from 'camelcase'
import { camelToKebab, camelToSpaces, firstUpperCase } from './case-helpers'

const camelCaser = camelcase.default

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
