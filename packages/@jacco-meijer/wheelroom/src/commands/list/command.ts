import { Argv } from 'yargs'
import { listHandler } from './list-handler'

export const listCmdBuilder = {
  aliases: ['ls'],
  command: 'list',
  describe: 'List component configs',
  handler: (argv: Argv) => {
    listHandler(argv)
  },
}
