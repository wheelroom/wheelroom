import { replaceVars } from '../../fixtures/replace-vars'
import { createParser } from '../../create-parser'
import { firstItemFunc } from './first-item'
jest.setTimeout(10000)

describe('Parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(firstItemFunc)

  test('variable %firstItem% with proper dropdown field', () => {
    parser.updateVars({ field: replaceVars.component.fields.dropdownField })
    const result = parser.parse('This is the test case for %firstItem%')
    expect(result).toEqual('This is the test case for dutch drop A')
  })
  test('variable %firstItem% with proper checkbox field', () => {
    parser.updateVars({ field: replaceVars.component.fields.checkboxField })
    const result = parser.parse('This is the test case for %firstItem%')
    expect(result).toEqual('This is the test case for dutch check A')
  })
  test('variable %firstItem% with wrong dropdown field', () => {
    parser.updateVars({ field: replaceVars.component.fields.numberField })
    const result = parser.parse('This is the test case for %firstItem%')
    expect(result).toEqual('This is the test case for bad-field-first-item')
  })
})
