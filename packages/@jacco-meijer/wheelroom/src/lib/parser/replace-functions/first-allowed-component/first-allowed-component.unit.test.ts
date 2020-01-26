import { replaceVars } from '../../../../fixtures/replace-vars'
import { createParser } from '../../create-parser'
import { firstAllowedComponentFunc } from './first-allowed-component'
jest.setTimeout(10000)

describe('Parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(firstAllowedComponentFunc)

  test('variable %firstAllowedComponent% with singleComponent field', () => {
    parser.updateVars({
      field: replaceVars.component.fields.singleComponentField,
    })
    const result = parser.parse(
      'This is the test case for %firstAllowedComponent%'
    )
    expect(result).toEqual('This is the test case for KL')
  })
  test('array %firstAllowedComponent% with multipleComponents field', () => {
    parser.updateVars({
      field: replaceVars.component.fields.multipleComponentsField,
    })
    const result = parser.parse(['%firstAllowedComponent%'])
    expect(result).toEqual(['page'])
  })
})
