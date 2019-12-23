import { templateSets } from './src/wheelroom/template-sets.js'
import { templates } from './src/wheelroom/templates/templates.js'
import { components } from './src/wheelroom/components.js'
import { contentfulBackend } from './src/wheelroom/contentful-backend.js'

export const config = {
  components,
  backends: {
    contentful: contentfulBackend,
  },
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
