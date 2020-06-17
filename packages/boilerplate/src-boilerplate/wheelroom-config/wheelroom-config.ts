import { WheelroomConfig } from '@wheelroom/wheelroom'
import { boilerplateTemplates } from './template-sets/boilerplate/boilerplate-templates'
import { graphqlTemplates } from './template-sets/graphql/graphql-templates'
import { contentSets } from './content-sets/content-sets'
import { replaceSets } from './replace-sets'

// The files are in a temp local folder, because of the ts compiler
import { coreModels } from './will-move-a-module/models/core-models'
import { tableModels } from './will-move-a-module/models/table-models'
import { blogModels } from './will-move-a-module/models/blog-models'
import { fieldDefautls } from './will-move-a-module/field-defaults'
import { commonFields } from './will-move-a-module/common-fields'
import { contentfulFieldDefinitions } from './will-move-a-module/contentful-field-definitions'

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
