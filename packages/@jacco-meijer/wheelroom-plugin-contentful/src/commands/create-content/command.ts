import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cc'],
  builder: (yargs: any) => {
    yargs.positional('content-set', {
      describe: 'Content set to be created',
      type: 'string',
    })
  },
  command: 'create-content [content-set] [options]',
  describe:
    'Create content from initialContent (set by model field) or from configured content set',
  handler: async (argv: Argv) => {
    await handler(argv)
  },
}
