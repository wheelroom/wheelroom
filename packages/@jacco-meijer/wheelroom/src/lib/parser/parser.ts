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

interface BaseParser {
  component?: WheelroomComponent
  componentName: string
  fieldName?: string
  fieldType?: string
  graphQL?: GraphQL
  pageSectionsArray?: string[]
}

interface StringParser extends BaseParser {
  unparsed: string
}

interface Parser extends BaseParser {
  unparsed: string | string[]
}

export const parser = (context: Parser): string | string[] => {
  if (typeof context.unparsed === 'string') {
    return stringParser(context as StringParser)
  }
  if (Array.isArray(context.unparsed)) {
    const result: string[] = []
    const unparsedArray: string[] = context.unparsed
    if (
      unparsedArray[0] === '%pageSectionsArray%' &&
      context.pageSectionsArray
    ) {
      return context.pageSectionsArray
    }
    unparsedArray.forEach((unparsed: string) => {
      context.unparsed = unparsed
      result.push(stringParser(context as StringParser))
    })
    return result
  }
  return 'parser-bug'
}

const stringParser = (context: StringParser): string => {
  let parsed: string = context.unparsed

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
  return parsed as string
}
