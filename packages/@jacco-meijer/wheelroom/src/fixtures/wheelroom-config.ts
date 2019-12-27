import { WheelroomConfig } from '../types/wheelroom-config'
import { commonFields } from './wheelroom/common-fields'
import { components } from './wheelroom/components'
import { fieldDefaults } from './wheelroom/field-defaults'

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
