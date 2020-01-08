/**
 *
 * Component variables
 *
 * - %componentHtmlAttributes%
 *
 *
 * Name variables
 *
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
 *
 * Settings variables
 *
 * Use %componentVar(path:settings.asQuery)% to get the value of the
 * settings.asQuery variable.
 *
 */

import { WheelroomComponent } from '../../types/wheelroom-components'
import { FieldType } from '../../types/wheelroom-fields'
import { replaceAll } from './case-helpers'
import { getCases } from './get-cases'

interface Parser {
  component?: WheelroomComponent
  componentName: string
  fieldName?: string
  fieldType?: string
}
export const parser = <T extends string | string[]>(
  unparsed: T,
  context: Parser
): T => {
  if (typeof unparsed === 'string') {
    return stringParser(unparsed, context) as T
  }
  if (Array.isArray(unparsed)) {
    const result: string[] = []
    const unparsedArray: string[] = unparsed
    unparsedArray.forEach((str: string) => {
      result.push(stringParser(str, context))
    })
    return result as T
  }
  return 'parser-bug' as T
}

const stringParser = (unparsed: string, context: Parser): string => {
  let parsed = unparsed

  const myRegexp = /%([^(%]+)(?:\(([^)]+)\))?%/g
  let match = myRegexp.exec(unparsed)

  while (match != null) {
    const params: { [name: string]: string } = {}
    const fullMatch = match[0]
    if (match[2]) {
      const splitted = match[2].split(',')
      splitted.forEach((fullParam: string) => {
        const [name, value] = fullParam.split(':')
        params[name.trim()] = value.trim()
      })
    }
    const variableName = match[1]
    const cnCase = getCases(context.componentName)
    const fnCase = context.fieldName ? getCases(context.fieldName) : ({} as any)
    const ftCase = context.fieldType ? getCases(context.fieldType) : ({} as any)
    switch (variableName) {
      case 'Component name':
        parsed = replaceAll(parsed, fullMatch, cnCase.sentenceCase)
        break
      case 'component name':
        parsed = replaceAll(parsed, fullMatch, cnCase.lowerCase)
        break
      case 'ComponentName':
        parsed = replaceAll(parsed, fullMatch, cnCase.pascalCase)
        break
      case 'componentName':
        parsed = replaceAll(parsed, fullMatch, cnCase.camelCase)
        break
      case 'component-name':
        parsed = replaceAll(parsed, fullMatch, cnCase.kebabCase)
        break
      case 'Field name':
        parsed = replaceAll(parsed, fullMatch, fnCase.sentenceCase)
        break
      case 'field name':
        parsed = replaceAll(parsed, fullMatch, fnCase.lowerCase)
        break
      case 'FieldName':
        parsed = replaceAll(parsed, fullMatch, fnCase.pascalCase)
        break
      case 'fieldName':
        parsed = replaceAll(parsed, fullMatch, fnCase.camelCase)
        break
      case 'field-name':
        parsed = replaceAll(parsed, fullMatch, fnCase.kebabCase)
        break
      case 'Field type':
        parsed = replaceAll(parsed, fullMatch, ftCase.sentenceCase)
        break
      case 'field type':
        parsed = replaceAll(parsed, fullMatch, ftCase.lowerCase)
        break
      case 'FieldType':
        parsed = replaceAll(parsed, fullMatch, ftCase.pascalCase)
        break
      case 'fieldType':
        parsed = replaceAll(parsed, fullMatch, ftCase.camelCase)
        break
      case 'field-type':
        parsed = replaceAll(parsed, fullMatch, ftCase.kebabCase)
        break
      case 'componentHtmlAttributes':
        if (context.component) {
          const attrs = Object.entries(context.component.fields)
            .map(
              ([fieldName, field]: [string, FieldType]) =>
                `${fieldName}="${
                  typeof field.initialContent === 'string'
                    ? field.initialContent
                    : 'value'
                }"`
            )
            .join(' ')
          parsed = replaceAll(parsed, fullMatch, attrs)
        }
        break
      case 'componentVar':
        if (context.component) {
          if ('path' in params) {
            const value = params.path
              .split('.')
              .reduce((o: any, i) => o[i], context.component)
            parsed = replaceAll(parsed, fullMatch, value)
          }
        }
        break
    }
    match = myRegexp.exec(unparsed)
  }
  return parsed
}
