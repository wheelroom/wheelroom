import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cm'],
  command: 'list-models',
  describe: 'List models configured at Contentful',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
