/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

import { contentfulFieldDefinitions } from './contentful-field-definitions'

export const pluginOptionsOutput = {
  '@jacco-meijer/wheelroom-plugin-contentful': {
    defaultLocale: 'nl',
    fieldDefinitions: contentfulFieldDefinitions,
  },
  '@jacco-meijer/wheelroom-plugin-templates': {
    templateSets: {},
  },
}
