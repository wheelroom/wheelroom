import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['dm'],
  command: 'delete-models',
  describe: 'Delete configured models',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
