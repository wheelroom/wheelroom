import { Argv } from 'yargs'
import { handler } from './handler.js'

export const command = {
  aliases: ['dc'],
  command: 'delete-content',
  describe: 'Remove all demo content for configured models',
  handler: (argv: Argv) => {
    handler(argv)
  },
}
