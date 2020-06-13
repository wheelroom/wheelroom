import { WheelroomConfig } from '@wheelroom/wheelroom'
import { boilerplateTemplates } from './template-sets/boilerplate/boilerplate-templates'
import { graphqlTemplates } from './template-sets/graphql/graphql-templates'
import { contentSets } from './content-sets/content-sets'
import { replaceSets } from './replace-sets'

import { coreModels } from './will-move-to-wr-module/models/core-models'
import { tableModels } from './will-move-to-wr-module/models/table-models'
import { blogModels } from './will-move-to-wr-module/models/blog-models'
import { fieldDefautls } from './will-move-to-wr-module/field-defaults'
import { commonFields } from './will-move-to-wr-module/common-fields'
import { contentfulFieldDefinitions } from './will-move-to-wr-module/contentful-field-definitions'

export const config: WheelroomConfig = {
  commonFields: commonFields,
  components: { ...coreModels, ...blogModels, ...tableModels },
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
