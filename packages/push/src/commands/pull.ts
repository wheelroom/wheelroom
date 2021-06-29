import yargs from 'yargs'
import { PullArgv } from '../cli'
import { pullContent } from './pull-content'
import { pullModels } from './pull-models'

export interface PullCommand {
  argv: yargs.Arguments<PullArgv>
}

export const pullCommand = async ({ argv }: PullCommand) => {
  if (argv.type === 'content') {
    await pullContent({ path: argv.path })
  }
  if (argv.type === 'models') {
    await pullModels({ path: argv.path })
  }
}
