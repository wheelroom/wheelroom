import yargs from 'yargs'
import { PushArgv } from '../cli'
import { pushContent } from './push-content'
import { pushModels } from './push-models'

export interface PushCommand {
  argv: yargs.Arguments<PushArgv>
}

export const pushCommand = async ({ argv }: PushCommand) => {
  if (argv.type === 'content') {
    await pushContent({ file: argv.file })
  }
  if (argv.type === 'models') {
    await pushModels({ file: argv.file })
  }
}
