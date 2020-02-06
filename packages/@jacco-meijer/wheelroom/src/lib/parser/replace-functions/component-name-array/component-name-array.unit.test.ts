import { replaceVars } from '../../fixtures/replace-vars'
import { createParser } from '../../create-parser'
import { componentNameArrayFunc } from './component-name-array'
jest.setTimeout(10000)

describe('Parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(componentNameArrayFunc)

  test('variable %componentNameArray%', () => {
    const result = parser.parse(
      'This is the test case for %componentNameArray(filter:settings.asPageSection)%'
    )
    expect(result).toEqual(
      'This is the test case for testCompA, testCompB, testCompC'
    )
  })
  test('variable [%componentNameArray%]', () => {
    const result = parser.parse([
      'sampleD',
      '%componentNameArray(filter:settings.asPageSection)%',
    ])
    expect(result).toEqual(['sampleD', 'testCompA', 'testCompB', 'testCompC'])
  })
})
