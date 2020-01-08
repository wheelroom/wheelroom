import { templateParser } from '../template-parser'
import { input } from './input'
import { output } from './output'

jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  test('a full example', async () => {
    const result = templateParser(input)

    expect(result).toStrictEqual(output)
  })
})
