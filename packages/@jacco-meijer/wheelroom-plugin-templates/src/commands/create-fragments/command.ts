import { Argv } from 'yargs'
import { handler } from './handler'

export const command = {
  aliases: ['cf'],
  builder: (yargs: any) => {
    yargs.positional('path', {
      describe: 'where to create the fragment files',
      type: 'string',
    })
  },
  command: 'create-fragment',
  describe: 'Create required graphql fragments',
  handler: (argv: Argv) => {
    handler(argv)
  },
}
