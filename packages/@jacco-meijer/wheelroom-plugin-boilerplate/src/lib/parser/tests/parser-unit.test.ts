import { createParser, replaceFunctions } from '@jacco-meijer/wheelroom'
import { replaceFunctions as localReplaceFunction } from '../replace-functions'
import { input } from './input'
import { output } from './output'

jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(input.replaceVars)
  parser.addReplaceFunctions([...replaceFunctions, ...localReplaceFunction])
  test('a full example', async () => {
    const result = parser.parse(input.unparsed)

    expect(result).toStrictEqual(output)
  })
})
