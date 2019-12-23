import { templateSets } from './src/wheelroom/template-sets.js'
import { templates } from './src/wheelroom/templates/templates.js'
import { components } from './src/wheelroom/components.js'
import { fieldDefinitions } from './src/wheelroom/contentful-field-definitions.js'

export const config = {
  components,
  fieldDefinitions,
  plugins: [
    {
      options: {
        defaultLocale: 'nl',
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
