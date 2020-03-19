import { templateSets as boilerplateTemplates } from '../plugin-boilerplate/template-sets'
import { contentSets } from '../plugin-contentful/content-sets'
import { contentfulFieldDefinitions } from '../plugin-contentful/contentful-field-definitions'
import { templateSets as graphqlTemplates } from '../plugin-graphql/template-sets'

export const configPluginOptions = [
  {
    options: {
      contentSets,
      fieldDefinitions: contentfulFieldDefinitions,
    },
    resolve: '@wheelroom/wheelroom-plugin-contentful',
  },
  {
    options: {
      templateSets: boilerplateTemplates,
    },
    resolve: '@wheelroom/wheelroom-plugin-boilerplate',
  },
  {
    options: {
      templateSets: graphqlTemplates,
    },
    resolve: '@wheelroom/wheelroom-plugin-graphql',
  },
]
