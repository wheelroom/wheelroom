import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cc'],
  command: 'create-site',
  describe: 'Create content from config file',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
