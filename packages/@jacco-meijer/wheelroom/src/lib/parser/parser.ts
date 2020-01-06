/**
 *
 * Component variables
 * ===================
 * - %componentHtmlAttributes%
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

import { GraphQL, WheelroomComponent } from '../../types/wheelroom-components'
import { WheelroomField } from '../../types/wheelroom-fields'
import { replaceAll } from './case-helpers'
import { getCases } from './get-cases'

interface Parser {
  component?: WheelroomComponent
  componentName: string
  fieldName?: string
  fieldType?: string
  graphQL?: GraphQL
  pageSectionsArray?: string[]
  unparsed: string
}

export const parser = (context: Parser): string => {
  let parsed: string | string[] = context.unparsed

  const cnCase = getCases(context.componentName)
  parsed = replaceAll(parsed, '%Component name%', cnCase.sentenceCase)
  parsed = replaceAll(parsed, '%component name%', cnCase.lowerCase)
  parsed = replaceAll(parsed, '%ComponentName%', cnCase.pascalCase)
  parsed = replaceAll(parsed, '%componentName%', cnCase.camelCase)
  parsed = replaceAll(parsed, '%component-name%', cnCase.kebabCase)

  if (context.fieldName) {
    const fCase = getCases(context.fieldName)
    parsed = replaceAll(parsed, '%Field name%', fCase.sentenceCase)
    parsed = replaceAll(parsed, '%field name%', fCase.lowerCase)
    parsed = replaceAll(parsed, '%FieldName%', fCase.pascalCase)
    parsed = replaceAll(parsed, '%fieldName%', fCase.camelCase)
    parsed = replaceAll(parsed, '%field-name%', fCase.kebabCase)
  }

  if (context.fieldType) {
    const tCase = getCases(context.fieldType)
    parsed = replaceAll(parsed, '%Field type%', tCase.sentenceCase)
    parsed = replaceAll(parsed, '%field type%', tCase.lowerCase)
    parsed = replaceAll(parsed, '%FieldType%', tCase.pascalCase)
    parsed = replaceAll(parsed, '%fieldType%', tCase.camelCase)
    parsed = replaceAll(parsed, '%field-type%', tCase.kebabCase)
  }

  // Parse %createPageQuery%
  if (context.graphQL) {
    parsed = replaceAll(
      parsed,
      '%createPageQuery%',
      context.graphQL.createPageQuery || 'not-found'
    )
  }

  // Parse %componentHtmlAttributes%
  if (context.component) {
    const htmlAttributes = Object.entries(context.component.fields)
      .map(
        ([fieldName, field]: [string, WheelroomField]) =>
          `${fieldName}="${field.initialContent}"`
      )
      .join(' ')
    parsed = replaceAll(parsed, '%componentHtmlAttributes%', htmlAttributes)
  }

  if (context.pageSectionsArray) {
    parsed =
      parsed === '%pageSectionsArray%' ? context.pageSectionsArray : parsed
  }

  return parsed as string
}
