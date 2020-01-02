import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cf'],
  builder: (yargs: any) => {
    yargs
      .positional('template-set', {
        describe: 'What template set to create',
        type: 'string',
      })
      .positional('path', {
        describe: 'Where to create the files',
        type: 'string',
      })
  },
  command: 'create-files <template-set> <path> [options]',
  describe: 'Create files defined in template set',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
