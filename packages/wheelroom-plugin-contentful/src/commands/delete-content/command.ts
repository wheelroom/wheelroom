import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['dc'],
  builder: (yargs: any) => {
    yargs.positional('content-set', {
      describe: 'Content set to be deleted',
      type: 'string',
    })
  },
  command: 'delete-content [content-set] [options]',
  describe:
    'Remove content from initialContent (set by model field) or from configured content set',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
