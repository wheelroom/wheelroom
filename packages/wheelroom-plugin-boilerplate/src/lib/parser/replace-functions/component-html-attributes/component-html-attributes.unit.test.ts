import { createParser } from '@wheelroom/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { componentHtmlAttributesFunc } from './component-html-attributes'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(componentHtmlAttributesFunc)
  test('variable: %componentHtmlAttributes%', async () => {
    const result = parser.parse('<Element %componentHtmlAttributes% />')

    expect(result).toStrictEqual(
      '<Element __typename="value" someText="testing-this-here" title="value" />'
    )
  })
})
