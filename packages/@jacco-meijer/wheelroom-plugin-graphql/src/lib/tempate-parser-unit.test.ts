import { templateParser } from './template-parser'

test('Template parser', async () => {
  const result = templateParser({
    component: {
      fields: {
        __typename: {
          system: true,
          type: 'shortText',
        },
        someText: {
          localized: false,
          required: false,
          type: 'shortText',
        },
        title: {
          helpText: 'Never displayed, only used for listing within Contentful',
          localized: false,
          required: true,
          type: 'shortText',
        },
      },
      graphQL: {
        fragment: false,
        pageSection: false,
      },
      modelVersion: '1.0.0',
    },
    componentName: 'exampleBlock',
    unparsed: `
This is a test %variation%
With a capital %Variation%

And some things that need to be indented: {
%reactProps(indent:2)%
}

    And some other things that need to be indented: {
%variationList(indent:6)%
    }

  And smore indenting: {
%reactProps(indent:4)%
  }
`,
  })

  expect(result).toEqual(`
This is a test testingSingle
With a capital TestingSingle

And some things that need to be indented: {
  __typename: string
  someText: string
  title: string
}

    And some other things that need to be indented: {
      ['testing-single']: ExampleBlockTestingSingleVar,
    }

  And smore indenting: {
    __typename: string
    someText: string
    title: string
  }
`)
})
