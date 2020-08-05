import { WheelroomConfig } from '@wheelroom/wheelroom'
import {
  contentfulFieldDefinitions,
  coreModelConfig,
  fieldDefautls,
  commonFields,
} from '@wheelroom/core'
import { blogModelConfig } from '@wheelroom/wheel-blog'
import { navigationModelConfig } from '@wheelroom/wheel-navigation'
import { tableModelConfig } from '@wheelroom/wheel-table'
import { textModelConfig } from '@wheelroom/wheel-text'
import { topicModelConfig } from '@wheelroom/wheel-topic'
import { customModelConfig } from '../custom-wheel/config/custom-model-config'
import { boilerplateTemplates } from './template-sets/boilerplate/boilerplate-templates'
import { contentSets } from './content-sets/content-sets'
import { graphqlTemplates } from './template-sets/graphql/graphql-templates'
import { replaceSets } from './replace-sets'

export const config: WheelroomConfig = {
  commonFields: commonFields,
  components: {
    ...coreModelConfig,
    ...blogModelConfig,
    ...navigationModelConfig,
    ...tableModelConfig,
    ...textModelConfig,
    ...topicModelConfig,
    ...customModelConfig,
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
