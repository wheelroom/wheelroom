import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['ls'],
  command: 'list',
  describe: 'List component configs',
  handler: (argv: Argv) => {
    handler(argv)
  },
}
