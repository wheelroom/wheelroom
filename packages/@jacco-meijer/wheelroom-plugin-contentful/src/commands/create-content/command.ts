import { Argv } from 'yargs'
import { handler } from './handler.js'

export const command = {
  aliases: ['cc'],
  command: 'create-content',
  describe: 'Create demo content from model field initialContent',
  handler: (argv: Argv) => {
    handler(argv)
  },
}
