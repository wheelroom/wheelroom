import { replaceVars } from '../../../../fixtures/replace-vars'
import { createParser } from '../../create-parser'
import { fieldTypeFunc } from './field-type'
jest.setTimeout(10000)

describe('Parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(fieldTypeFunc)

  test('variable %Field type%', () => {
    const result = parser.parse('This is the test case for %Field type%')
    expect(result).toEqual('This is the test case for Some field type')
  })
  test('variable %field type%', () => {
    const result = parser.parse('This is the test case for %field type%')
    expect(result).toEqual('This is the test case for some field type')
  })
  test('variable %fieldType%', () => {
    const result = parser.parse('This is the test case for %fieldType%')
    expect(result).toEqual('This is the test case for someFieldType')
  })
  test('variable %FieldType%', () => {
    const result = parser.parse('This is the test case for %FieldType%')
    expect(result).toEqual('This is the test case for SomeFieldType')
  })
  test('variable %field-type%', () => {
    const result = parser.parse('This is the test case for %field-type%')
    expect(result).toEqual('This is the test case for some-field-type')
  })
})
