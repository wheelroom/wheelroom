import { commonFields } from './src/wheelroom/common-fields.js'
import { components } from './src/wheelroom/components.js'
import { contentfulFieldDefinitions } from './src/wheelroom/contentful-field-definitions.js'
import { fieldDefaults } from './src/wheelroom/field-defaults.js'
import { templates } from './src/wheelroom/templates/templates.js'
import { templateSets } from './src/wheelroom/template-sets.js'

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
