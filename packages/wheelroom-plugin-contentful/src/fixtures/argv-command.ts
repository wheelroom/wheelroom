/**
 * Mock output of the wheelroom binary. This output is the input for a wheelroom
 * command. This is the argv object passed by wheelroom to a command handler.
 * Command handlers can be added by plugins.
 */

import { argvComponents } from './argv-components'
import { argvPluginOptions } from './argv-plugin-options'
import { PluginArguments } from '../types/plugin-arguments'

export const argvCommand: PluginArguments = {
  _: ['create-content'],
  components: argvComponents,
  contentSet: undefined,
  locale: 'en-US',
  replaceSet: undefined,
  options: argvPluginOptions,
  yes: true,
}
