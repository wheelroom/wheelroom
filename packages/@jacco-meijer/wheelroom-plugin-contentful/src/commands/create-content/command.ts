import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cc'],
  command: 'create-content',
  describe: 'Create demo content from model field initialContent',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
