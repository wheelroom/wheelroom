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
 * - %pageSectionsArray% - array of all model names with graphQL.pageSection set
 * - %createPageQuery% - From component.graphQL.createPageQuery
 *
 */

import { GraphQL } from '../../types/wheelroom-components'
import { replaceAll } from './case-helpers'
import { getCases } from './get-cases'

interface Parser {
  componentName: string
  fieldName?: string
  fieldType?: string
  graphQL?: GraphQL
  pageSectionsArray?: string[]
  unparsed: string
}

export const parser = (context: Parser): string => {
  let parsed: string | string[] = context.unparsed

  const component = getCases(context.componentName)
  parsed = replaceAll(parsed, '%Component name%', component.sentenceCase)
  parsed = replaceAll(parsed, '%component name%', component.lowerCase)
  parsed = replaceAll(parsed, '%ComponentName%', component.pascalCase)
  parsed = replaceAll(parsed, '%componentName%', component.camelCase)
  parsed = replaceAll(parsed, '%component-name%', component.kebabCase)

  if (context.fieldName) {
    const field = getCases(context.fieldName)
    parsed = replaceAll(parsed, '%Field name%', field.sentenceCase)
    parsed = replaceAll(parsed, '%field name%', field.lowerCase)
    parsed = replaceAll(parsed, '%FieldName%', field.pascalCase)
    parsed = replaceAll(parsed, '%fieldName%', field.camelCase)
    parsed = replaceAll(parsed, '%field-name%', field.kebabCase)
  }

  if (context.fieldType) {
    const type = getCases(context.fieldType)
    parsed = replaceAll(parsed, '%Field type%', type.sentenceCase)
    parsed = replaceAll(parsed, '%field type%', type.lowerCase)
    parsed = replaceAll(parsed, '%FieldType%', type.pascalCase)
    parsed = replaceAll(parsed, '%fieldType%', type.camelCase)
    parsed = replaceAll(parsed, '%field-type%', type.kebabCase)
  }

  if (context.graphQL) {
    parsed = replaceAll(
      parsed,
      '%createPageQuery%',
      context.graphQL.createPageQuery || 'not-found'
    )
  }

  if (context.pageSectionsArray) {
    parsed =
      parsed === '%pageSectionsArray%' ? context.pageSectionsArray : parsed
  }

  return parsed as string
}
