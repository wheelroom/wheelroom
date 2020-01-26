import { createParser } from '@jacco-meijer/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { tsModelsFunc } from './ts-models'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(tsModelsFunc)
  test('variable: %tsModels(indent:4)%', async () => {
    const result = parser.parse('%tsModels(indent:4)%')

    expect(result).toStrictEqual(`    interface ComponentA {
      fields: {
        someText: string
        title: string
      }
      model: 'componentA'
    }
    interface ComponentB {
      fields: {
        someText: string
        title: string
      }
      model: 'componentB'
    }
`)
  })
})
