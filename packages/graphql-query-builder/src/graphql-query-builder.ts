/**
 * Main file of this library, besides the type definitions and the test, this is
 * all there is.
 */

import { Directive, Field, Fields, Question } from './types/question'

const INDENT_STRING = '  '

const addArgumentsMultiLine = (indentLevel: number, field: Field): string => {
  let newFieldString = `(\n`
  const argumentIndent = Array(indentLevel).join(INDENT_STRING)
  Object.entries(field.arguments!).forEach(
    ([name, value]: [string, string]) => {
      newFieldString += `${argumentIndent}${INDENT_STRING}${name}: ${value}\n`
    }
  )
  newFieldString += `${argumentIndent})`
  return newFieldString
}

const addArgumentsSingleLine = (indentLevel: number, field: Field): string => {
  const args = Object.entries(field.arguments!).map(
    ([name, value]: [string, string]) => `${name}: ${value}`
  )
  const newFieldString = `(${args.join(', ')})`
  return newFieldString
}

const addField = (
  fieldName: string,
  field: Field,
  indentLevel: number
): string => {
  let fieldString = fieldName
  let addArgumentsFlag = false
  let addSubFieldsFlag = false
  Object.entries(field).forEach(
    ([attributeName, attribute]: [string, string | Directive]) => {
      // Flag arguments and subfiels. They exapnd into multiple lines and must
      // be handled lastly.
      switch (attributeName) {
        case 'alias':
          fieldString = `${attribute}: ${fieldString}`
          break
        case 'arguments':
          addArgumentsFlag = true
          break
        case 'directive':
          const directive = attribute as Directive
          fieldString = `${fieldString} ${directive.name}(${directive.value})`
          break
        case 'fields':
          addSubFieldsFlag = true
          break
        case 'inlineFragment':
          if (attribute) {
            fieldString = `... on ${fieldString}`
          }
          break
        case 'fragment':
          if (attribute) {
            fieldString = `...${fieldString}`
          }
          break
      }
    }
  )
  if (addArgumentsFlag) {
    if (Object.keys(field.arguments!).length > 1) {
      const argumentsMultiLine = addArgumentsMultiLine(indentLevel, field)
      fieldString = `${fieldString}${argumentsMultiLine}`
    } else {
      const argumentsSingleLine = addArgumentsSingleLine(indentLevel, field)
      fieldString = `${fieldString}${argumentsSingleLine}`
    }
  }
  if (addSubFieldsFlag) {
    const subFields = addFields(field.fields!, indentLevel + 1)
    fieldString = `${fieldString} ${subFields}`
  }
  const indentString = Array(indentLevel).join(INDENT_STRING)
  return `${indentString}${fieldString}\n`
}

const addFields = (fields: Fields, indentLevel: number): string => {
  let allFields = ''
  Object.entries(fields).forEach(([fieldName, field]: [string, Field]) => {
    allFields += addField(fieldName, field, indentLevel)
  })
  const indentString = Array(indentLevel - 1).join(INDENT_STRING)
  return `{\n${allFields}${indentString}}`
}

export const graphqlQueryBuilder = (question: Question): string => {
  const type = question.operationType ? question.operationType + ' ' : ''
  const name = question.operationName ? question.operationName + ' ' : ''
  /**
   * Indent level internally starts at 2
   * Number of spaces is: (inentLevel - 1) * 2
   * The reason is because Array(indentLevel).join('  ') is used.
   * An array with length 1 does not result in a join at all
   */
  const indentLevel = question.indentLevel || 0
  const indentString = Array(indentLevel + 1).join(INDENT_STRING)
  const fields = addFields(question.fields, indentLevel + 2)

  let result: string
  if (question.fragment) {
    result = `${indentString}fragment ${question.fragment.name} on ${question.fragment.on} ${fields}`
  } else {
    result = `${indentString}${type}${name}${fields}`
  }

  return result
}
