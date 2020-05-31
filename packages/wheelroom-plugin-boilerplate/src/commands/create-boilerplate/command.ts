import { handler } from './handler'
import { PluginArguments } from '../../types/plugin-arguments'

export const command = {
  aliases: ['cb'],
  builder: (yargs: any) => {
    yargs
      .positional('template-set', {
        describe: 'What boilerplate template set to create',
        type: 'string',
      })
      .positional('path', {
        describe: 'Where to create the boilerplate files',
        type: 'string',
      })
  },
  command: 'create-boilerplate <template-set> <path> [options]',
  describe: 'Create boilerplate files defined in template set',
  handler: async (argv: PluginArguments) => {
    await handler(argv)
  },
}
