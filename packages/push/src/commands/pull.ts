import yargs from 'yargs'
import { PullArgv } from '../cli'
import { pullContent } from './pull-content'
import { pullModels } from './pull-models'

export interface PullCommand {
  argv: yargs.Arguments<PullArgv>
}

export const pullCommand = ({ argv }: PullCommand) => {
  if (argv.type === 'content') {
    pullContent({ path: argv.path })
  }
  if (argv.type === 'models') {
    pullModels({ path: argv.path })
  }
}
