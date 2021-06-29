import yargs from 'yargs'
import { PushArgv } from '../cli'
import { pushContent } from './push-content'
import { pushModels } from './push-models'

export interface PushCommand {
  argv: yargs.Arguments<PushArgv>
}

export const pushCommand = ({ argv }: PushCommand) => {
  if (argv.type === 'content') {
    pushContent({ file: argv.file })
  }
  if (argv.type === 'models') {
    pushModels({ file: argv.file })
  }
}
