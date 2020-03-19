import { createParser } from '@wheelroom/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { variationListFunc } from './variation-list'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(variationListFunc)
  test('variable: %variation-list%', async () => {
    const result = parser.parse('%variationList(indent:6)%')

    expect(result).toStrictEqual(
      `      ['testingSingle']: ExampleBlockTestingSingleVar,`
    )
  })
})
