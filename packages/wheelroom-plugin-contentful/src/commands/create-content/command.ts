import { handler } from './handler'
import { PluginArguments } from '../../types/plugin-arguments'

export const command = {
  aliases: ['cc'],
  builder: (yargs: any) => {
    yargs.positional('content-set', {
      describe: 'Content set to be created',
      type: 'string',
    })
  },
  command: 'create-content [content-set] [options]',
  describe:
    'Create content from initialContent (set by model field) or from configured content set',
  handler: async (argv: PluginArguments) => {
    await handler(argv)
  },
}
