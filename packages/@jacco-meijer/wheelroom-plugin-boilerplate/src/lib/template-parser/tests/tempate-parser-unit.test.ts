import { templateParser } from '../template-parser'
import { input } from './input'
import { output } from './output'

jest.setTimeout(10000)

test('Template parser', async () => {
  const result = templateParser(input)

  expect(result).toStrictEqual(output)
})
