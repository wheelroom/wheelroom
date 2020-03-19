import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cg'],
  builder: (yargs: any) => {
    yargs
      .positional('template-set', {
        describe: 'What graphql template set to create',
        type: 'string',
      })
      .positional('path', {
        describe: 'Where to create the graphql files',
        type: 'string',
      })
  },
  command: 'create-graphql <template-set> <path> [options]',
  describe: 'Create graphql files defined in template set',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
