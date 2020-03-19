import { createParser, replaceFunctions } from '@jacco-meijer/wheelroom'
import { replaceVars } from '../../fixtures/replace-vars'
import { replaceFunctions as localReplaceFunction } from './replace-functions'

jest.setTimeout(10000)

const unparsed = `
This is a test %variationName%
With a capital %VariationName%

And some things that need to be indented: {
%reactProps(indent:2)%
}

    And some other things that need to be indented: {
%variationList(indent:6)%
    }

  And smore indenting: {
%reactProps(indent:4)%
  }

<Element %componentHtmlAttributes%
`

const parsed = `
This is a test testingSingle
With a capital TestingSingle

And some things that need to be indented: {
  __typename: string
  someText: string
  title: string
}

    And some other things that need to be indented: {
      ['testingSingle']: ExampleBlockTestingSingleVar,
    }

  And smore indenting: {
    __typename: string
    someText: string
    title: string
  }

<Element __typename="value" someText="testing-this-here" title="value"
`

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions([...replaceFunctions, ...localReplaceFunction])
  test('a full example', async () => {
    const result = parser.parse(unparsed)

    expect(result).toStrictEqual(parsed)
  })
})
