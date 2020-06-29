import { WheelroomConfig } from '@wheelroom/wheelroom'
import { boilerplateTemplates } from './template-sets/boilerplate/boilerplate-templates'
import { graphqlTemplates } from './template-sets/graphql/graphql-templates'
import { contentSets } from './content-sets/content-sets'
import { replaceSets } from './replace-sets'

// The files are in a temp local folder, because of the ts compiler
import { coreModels } from '@wheelroom/core'
import { tableModels } from '@wheelroom/wheel-table'
import { blogModels } from '@wheelroom/wheel-blog'
import { textModels } from '@wheelroom/wheel-text'
import { topicModels } from '@wheelroom/wheel-topic'
import { fieldDefautls } from '@wheelroom/core'
import { commonFields } from '@wheelroom/core'
import { contentfulFieldDefinitions } from '@wheelroom/core'

export const config: WheelroomConfig = {
  commonFields: commonFields,
  components: {
    ...coreModels,
    ...blogModels,
    ...tableModels,
    ...topicModels,
    ...textModels,
  },
  fieldDefaults: fieldDefautls,
  plugins: [
    {
      options: {
        contentSets,
        fieldDefinitions: contentfulFieldDefinitions,
        replaceSets,
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
  ],
}
