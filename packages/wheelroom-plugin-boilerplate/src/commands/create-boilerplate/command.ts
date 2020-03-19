import { Argv } from 'yargs'
import { handler } from './handler'

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
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
