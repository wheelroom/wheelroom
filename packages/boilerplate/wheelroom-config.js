import { commonFields } from './src/wheelroom/common-fields'
import { components } from './src/wheelroom/components'
import { contentfulFieldDefinitions } from './src/wheelroom/contentful-field-definitions'
import { fieldDefaults } from './src/wheelroom/field-defaults'
import { templates } from './src/wheelroom/templates/templates'
import { templateSets } from './src/wheelroom/template-sets'

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
