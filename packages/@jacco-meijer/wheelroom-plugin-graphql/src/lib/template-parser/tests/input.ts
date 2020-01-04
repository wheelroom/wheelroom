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
# subPage query
%componentQuery(prefix:allContentful)
  
# global query
%componentQuery(prefix:allContentful)
  
# page query
%componentQuery(prefix:allContentful)

# Article fragment
%componentFragment%(prefix:Contentful)
  
# ArticlesSection fragment
%componentFragment%(prefix:Contentful)

# FeaturedPage fragment
%componentFragment%(prefix:Contentful)
`,
}
