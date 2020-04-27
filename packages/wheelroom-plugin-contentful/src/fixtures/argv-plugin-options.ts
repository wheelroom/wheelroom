/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

import { argvContentSets } from './argv-content-sets'
import { contentfulFieldDefinitions } from './contentful-field-definitions'
import { argvReplaceSets } from './argv-replace-sets'

export const argvPluginOptions = {
  '@wheelroom/wheelroom-plugin-contentful': {
    contentSets: argvContentSets,
    replaceSets: argvReplaceSets,
    fieldDefinitions: contentfulFieldDefinitions,
  },
  'some-other-package': {},
}
