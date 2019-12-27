import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cm'],
  command: 'create-models',
  describe: 'Create or update configured models',
  handler: (argv: Argv) => {
    handler(argv)
  },
}
