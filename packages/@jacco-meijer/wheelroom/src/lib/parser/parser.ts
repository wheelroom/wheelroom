/**
 * Parses these simple string variables
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
 * Use %componentNameArray(filter:settings.asPageSection)% to get a comma
 * separated list of component names that have the asPageSection setting set.
 * When used in a string within an array, the component names are added to the
 * array.
 *
 *
 */

import {
  WheelroomComponent,
  WheelroomComponents,
} from '../../types/wheelroom-components'
import { replaceAll } from './case-helpers'
import { getCases } from './get-cases'

interface Parser {
  component?: WheelroomComponent
  components?: WheelroomComponents
  componentName: string
  fieldName?: string
  fieldType?: string
}
export const parser = <T extends string | string[]>(
  unparsed: T,
  context: Parser
): T => {
  if (typeof unparsed === 'string') {
    const [parsed] = stringParser(unparsed, context)
    return parsed as T
  }
  if (Array.isArray(unparsed)) {
    const result: string[] = []
    const unparsedArray: string[] = unparsed
    unparsedArray.forEach((str: string) => {
      const [parsed, isArrayFlag] = stringParser(str, context)
      if (isArrayFlag) {
        result.push(...parsed.split(', '))
      } else {
        result.push(parsed)
      }
    })
    return result as T
  }
  return 'parser-bug' as T
}

const stringParser = (unparsed: string, context: Parser): [string, boolean] => {
  let parsed = unparsed
  let isArrayFlag: boolean = false

  const myRegexp = /%([^(%]+)(?:\(([^)]+)\))?%/g
  let match = myRegexp.exec(unparsed)

  while (match != null) {
    const params: { [name: string]: string } = {}
    const fullMatch = match[0]
    if (match[2]) {
      const splitted = match[2].split(',')
      splitted.forEach((fullParam: string) => {
        const [name, value] = fullParam.split(':')
        if (name && value) {
          params[name.trim()] = value.trim()
        }
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
      case 'componentNameArray':
        if (context.components) {
          if ('filter' in params) {
            const nameList = Object.entries(context.components)
              .filter(([, comp]: [string, WheelroomComponent]) => {
                const value = params.filter
                  .split('.')
                  .reduce((o: any, i) => o[i], comp)
                return value
              })
              .map(([compName, comp]: [string, WheelroomComponent]) => compName)
              .join(', ')
            isArrayFlag = true
            parsed = replaceAll(parsed, fullMatch, nameList)
          }
        }
        break
    }
    match = myRegexp.exec(unparsed)
  }
  return [parsed, isArrayFlag]
}
