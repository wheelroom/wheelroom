import { createParser } from '@wheelroom/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { variationImportListFunc } from './variation-import-list'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(variationImportListFunc)
  test('variable: %variationImportList%', async () => {
    const result = parser.parse('%variationImportList%')

    expect(result).toStrictEqual(
      "import { ExampleBlockTestingSingleVar } from './example-block-testing-single-var'"
    )
  })
})
