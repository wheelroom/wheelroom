import { WheelroomConfig } from '../types/wheelroom-config.js'
import { commonFields } from './wheelroom/common-fields.js'
import { components } from './wheelroom/components.js'
import { fieldDefaults } from './wheelroom/field-defaults.js'

export const fixtureWheelroomConfig: WheelroomConfig = {
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
