/**
 *
 * Name variables
 * ==============
 * - %Component name%
 * - %component name%
 * - %componentName%
 * - %ComponentName%
 * - %component-name%
 * - %Field name%
 * - %field name%
 * - %fieldName%
 * - %FieldName%
 * - %field-name%
 *
 * GraphQL variables
 * =================
 * - %pageSectionsArray% - array of all model names with graphQl.pageSection set
 *
 */

import { replaceAll } from './case-helpers'
import { getCases } from './get-cases'

export const parser = ({
  componentName,
  fieldName,
  pageSectionsArray,
  unparsed,
}: {
  componentName: string
  fieldName: string
  pageSectionsArray?: string[]
  unparsed: string
}): string => {
  let parsed: string | string[] = unparsed
  const component = getCases(componentName)
  const field = getCases(fieldName)

  parsed = replaceAll(parsed, '%Component name%', component.sentenceCase)
  parsed = replaceAll(parsed, '%component name%', component.lowerCase)
  parsed = replaceAll(parsed, '%ComponentName%', component.pascalCase)
  parsed = replaceAll(parsed, '%componentName%', component.camelCase)
  parsed = replaceAll(parsed, '%component-name%', component.kebabCase)

  parsed = replaceAll(parsed, '%Field name%', field.sentenceCase)
  parsed = replaceAll(parsed, '%field name%', field.lowerCase)
  parsed = replaceAll(parsed, '%FieldName%', field.pascalCase)
  parsed = replaceAll(parsed, '%fieldName%', field.camelCase)
  parsed = replaceAll(parsed, '%field-name%', field.kebabCase)

  if (pageSectionsArray) {
    parsed = parsed === '%pageSectionsArray%' ? pageSectionsArray : parsed
  }

  return parsed as string
}
