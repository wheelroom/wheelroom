import { createParser } from '@jacco-meijer/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { tsModelTypesFunc } from './ts-model-types'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(tsModelTypesFunc)
  test('variable: %tsModelTypes(indent:4)%', async () => {
    const result = parser.parse('%tsModelTypes(indent:4)%')

    expect(result).toStrictEqual(`    | ComponentA
    | ComponentB
`)
  })
})
