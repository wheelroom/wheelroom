import { WheelroomConfig } from '../types/wheelroom-config'
import { commonFields } from './common-fields'
import { components } from './components'
import { fieldDefaults } from './field-defaults'

export const config: WheelroomConfig = {
  commonFields,
  components,
  fieldDefaults,
  plugins: [
    {
      options: {
        defaultLocale: 'nl',
        fieldDefinitions: {},
      },
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
    },
    {
      options: {
        templateSets: {},
        templates: {},
      },
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
    },
  ],
}
