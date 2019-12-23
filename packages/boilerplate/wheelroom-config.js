import { commonFields } from './src/wheelroom/common-fields.js'
import { components } from './src/wheelroom/components.js'
import { contentfulFieldDefinitions } from './src/wheelroom/contentful-field-definitions.js'
import { fieldDefaults } from './src/wheelroom/field-defaults.js'
import { templates } from './src/wheelroom/templates/templates.js'
import { templateSets } from './src/wheelroom/template-sets.js'

/**
 *
 * Variables below are parsed by wheelroom. Plugins may also use the parsing
 * engine.
 *
 * Name variables
 * ==============
 * - %Component name%
 * - %component name%
 * - %componentName%
 * - %ComponentName%
 * - %component-name%
 * - %Field name%
 * - %field name%
 * - %fieldName%
 * - %FieldName%
 * - %field-name%
 *
 * GraphQL variables
 * =================
 * - %pageSectionsArray% - array of all model names with graphQl.pageSection set
 *
 */

export const config = {
  commonFields,
  components,
  fieldDefaults,
  plugins: [
    {
      options: {
        defaultLocale: 'nl',
        fieldDefinitions: contentfulFieldDefinitions,
      },
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
    },
    {
      options: {
        templates,
        templateSets,
      },
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
    },
  ],
}
