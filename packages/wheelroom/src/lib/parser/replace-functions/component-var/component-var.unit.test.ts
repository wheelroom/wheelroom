import { replaceVars } from '../../fixtures/replace-vars'
import { createParser } from '../../create-parser'
import { componentVarFunc } from './component-var'
jest.setTimeout(10000)

describe('Parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(componentVarFunc)

  test('variable %componentVar(path:settings.asQuery)%', () => {
    const result = parser.parse(
      'This is the test case for %componentVar(path:settings.asQuery)%'
    )
    expect(result).toEqual('This is the test case for global')
  })
})
