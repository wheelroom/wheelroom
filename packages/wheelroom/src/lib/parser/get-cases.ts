import camelcase from 'camelcase'
import { Cases } from '../../types/parser'
import { camelToKebab, camelToSpaces, firstUpperCase } from './case-helpers'

export const getCases = (anyCase: string): Cases => {
  const camelCase = camelcase(anyCase)
  const pascalCase = camelcase(anyCase, {
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
