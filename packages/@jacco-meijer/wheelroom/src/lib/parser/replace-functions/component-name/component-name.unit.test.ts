import { replaceVars } from '../../fixtures/replace-vars'
import { createParser } from '../../create-parser'
import { componentNameFunc } from './component-name'
jest.setTimeout(10000)

describe('Parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(componentNameFunc)

  test('variable %Component name%', () => {
    const result = parser.parse('This is the test case for %Component name%')
    expect(result).toEqual('This is the test case for My demo component')
  })
  test('variable %component name%', () => {
    const result = parser.parse('This is the test case for %component name%')
    expect(result).toEqual('This is the test case for my demo component')
  })
  test('variable %componentName%', () => {
    const result = parser.parse('This is the test case for %componentName%')
    expect(result).toEqual('This is the test case for myDemoComponent')
  })
  test('variable %ComponentName%', () => {
    const result = parser.parse('This is the test case for %ComponentName%')
    expect(result).toEqual('This is the test case for MyDemoComponent')
  })
  test('variable %component-name%', () => {
    const result = parser.parse('This is the test case for %component-name%')
    expect(result).toEqual('This is the test case for my-demo-component')
  })
})
