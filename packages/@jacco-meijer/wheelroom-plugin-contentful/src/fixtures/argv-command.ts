/**
 * Mock output of the wheelroom binary. This output is the input for a wheelroom
 * command. This is the argv object passed by wheelroom to a command handler.
 * Command handlers can be added by plugins.
 */

import { argvComponents } from './argv-components'
import { argvPluginOptions } from './argv-plugin-options'

export const argvCommand = {
  components: argvComponents,
  options: argvPluginOptions,
  yes: true,
}
