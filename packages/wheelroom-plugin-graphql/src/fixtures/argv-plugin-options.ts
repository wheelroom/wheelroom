/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

import { templateSets } from './template-sets/template-sets'

export const argvPluginOptions = {
  '@wheelroom/wheelroom-plugin-graphql': {
    templateSets,
  },
}
