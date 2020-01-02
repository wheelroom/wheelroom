/**
 *
 * Name variables
 * ==============
 * - %Component name%
 * - %component name%
 * - %componentName%
 * - %ComponentName%
 * - %component-name%
 *
 * - %Field name%
 * - %field name%
 * - %fieldName%
 * - %FieldName%
 * - %field-name%
 *
 * - %Field type%
 * - %field type%
 * - %fieldType%
 * - %FieldType%
 * - %field-type%
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
  fieldType,
  fieldName,
  pageSectionsArray,
  unparsed,
}: {
  componentName: string
  fieldType?: string
  fieldName?: string
  pageSectionsArray?: string[]
  unparsed: string
}): string => {
  let parsed: string | string[] = unparsed

  const component = getCases(componentName)
  parsed = replaceAll(parsed, '%Component name%', component.sentenceCase)
  parsed = replaceAll(parsed, '%component name%', component.lowerCase)
  parsed = replaceAll(parsed, '%ComponentName%', component.pascalCase)
  parsed = replaceAll(parsed, '%componentName%', component.camelCase)
  parsed = replaceAll(parsed, '%component-name%', component.kebabCase)

  if (fieldName) {
    const field = getCases(fieldName)
    parsed = replaceAll(parsed, '%Field name%', field.sentenceCase)
    parsed = replaceAll(parsed, '%field name%', field.lowerCase)
    parsed = replaceAll(parsed, '%FieldName%', field.pascalCase)
    parsed = replaceAll(parsed, '%fieldName%', field.camelCase)
    parsed = replaceAll(parsed, '%field-name%', field.kebabCase)
  }

  if (fieldType) {
    const type = getCases(fieldType)
    parsed = replaceAll(parsed, '%Field type%', type.sentenceCase)
    parsed = replaceAll(parsed, '%field type%', type.lowerCase)
    parsed = replaceAll(parsed, '%FieldType%', type.pascalCase)
    parsed = replaceAll(parsed, '%fieldType%', type.camelCase)
    parsed = replaceAll(parsed, '%field-type%', type.kebabCase)
  }

  if (pageSectionsArray) {
    parsed = parsed === '%pageSectionsArray%' ? pageSectionsArray : parsed
  }

  return parsed as string
}
