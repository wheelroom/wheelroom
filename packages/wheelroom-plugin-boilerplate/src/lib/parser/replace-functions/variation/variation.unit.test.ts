import { createParser } from '@wheelroom/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { variationFunc } from './variation'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(variationFunc)
  test('variable: %variation%', async () => {
    const result = parser.parse(` * - %Variation name%
    * - %variation name%
    * - %variationName%
    * - %VariationName%
    * - %variation-name%
   `)

    expect(result).toStrictEqual(` * - Testing single
    * - testing single
    * - testingSingle
    * - TestingSingle
    * - testing-single
   `)
  })
})
