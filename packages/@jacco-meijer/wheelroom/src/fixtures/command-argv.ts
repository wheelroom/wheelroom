/**
 * Mock output of the wheelroom binary. This output is the input for a wheelroom
 * command. This is the argv object passed by wheelroom to a command handler.
 * Command handlers can be added by plugins.
 */

import { componentsOutput } from './components-output'
import { pluginOptionsOutput } from './plugin-options-output'

export const commandArgv = {
  components: componentsOutput,
  options: pluginOptionsOutput,
}
