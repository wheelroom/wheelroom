import { createParser } from '@jacco-meijer/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { reactPropsFunc } from './react-props'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(reactPropsFunc)
  test('variable: %react-props%', async () => {
    const result = parser.parse('%reactProps(indent:4)%')

    expect(result).toStrictEqual(`    __typename: string
    someText: string
    title: string`)
  })
})
