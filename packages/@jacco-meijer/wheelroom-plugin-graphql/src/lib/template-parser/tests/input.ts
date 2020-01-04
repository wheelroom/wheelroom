import { TemplatParser } from '../template-parser'
export const input: TemplatParser = {
  component: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      someComponentOneText: {
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
      createPageQuery: 'page',
      fragment: true,
      pageSection: false,
    },
    modelVersion: '1.0.0',
  },
  componentName: 'componentTwo',
  unparsed: `
Component queries:
%componentQuery(prefix:allContentful)%

Component fragment:
%componentFragment(prefix:Contentul)%
`,
}
