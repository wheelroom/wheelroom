import { replaceVars } from './fixtures/replace-vars'
import { createParser } from './create-parser'
import { replaceFunctions } from './replace-functions'

const parser = createParser(replaceVars)
parser.addReplaceFunctions(replaceFunctions)

describe('The parser should parse', () => {
  test('two variables %field-name% and %component-name%', () => {
    const result = parser.parse(
      'This is the test case for %field-name% and %component-name%'
    )
    expect(result).toEqual(
      'This is the test case for my-field-name and my-demo-component'
    )
  })
})
