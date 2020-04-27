import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['rc'],
  builder: (yargs: any) => {
    yargs.positional('replace-set', {
      describe: 'Content set containing patterns and replacement',
      type: 'string',
    })
  },
  command: 'replace-content <replace-set> [options]',
  describe: 'Replace content as defined in replace set',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
