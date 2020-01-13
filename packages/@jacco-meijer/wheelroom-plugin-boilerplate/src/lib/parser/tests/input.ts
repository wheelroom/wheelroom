import { ReplaceVarsExt } from '../../../types/parser'

const replaceVars: ReplaceVarsExt = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      someText: {
        initialContent: 'testing-this-here',
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
    modelVersion: '1.0.0',
    settings: {
      asFragment: false,
      asPageSection: false,
    },
  },
  componentName: 'exampleBlock',
  singleVariationName: 'testing-single',
}

const unparsed = `
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

<Element %componentHtmlAttributes%
`

export const input = {
  replaceVars,
  unparsed,
}
