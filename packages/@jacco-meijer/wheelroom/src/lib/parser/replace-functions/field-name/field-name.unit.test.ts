import { replaceVars } from '../../../../fixtures/replace-vars'
import { createParser } from '../../create-parser'
import { fieldNameFunc } from './field-name'
jest.setTimeout(10000)

describe('Parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(fieldNameFunc)

  test('variable %Field name%', () => {
    const result = parser.parse('This is the test case for %Field name%')
    expect(result).toEqual('This is the test case for My field name')
  })
  test('variable %field name%', () => {
    const result = parser.parse('This is the test case for %field name%')
    expect(result).toEqual('This is the test case for my field name')
  })
  test('variable %fieldName%', () => {
    const result = parser.parse('This is the test case for %fieldName%')
    expect(result).toEqual('This is the test case for myFieldName')
  })
  test('variable %FieldName%', () => {
    const result = parser.parse('This is the test case for %FieldName%')
    expect(result).toEqual('This is the test case for MyFieldName')
  })
  test('variable %field-name%', () => {
    const result = parser.parse('This is the test case for %field-name%')
    expect(result).toEqual('This is the test case for my-field-name')
  })
})
