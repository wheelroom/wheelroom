import yargs from 'yargs'
import { PullArgv } from '../../cli'
import { callHandler } from '../../lib/call-handler'

export interface PullCommand {
  argv: yargs.Arguments<PullArgv>
}

// TODO: Make pluginName a cli parameter
export const pullCommand = async ({ argv }: PullCommand) => {
  if (argv.type === 'content') {
    await callHandler({
      callCommand: 'pull',
      callType: 'content',
      path: argv.path,
      pluginName: 'contentful',
    })
  }
  if (argv.type === 'models') {
    await callHandler({
      callCommand: 'pull',
      callType: 'models',
      path: argv.path,
      pluginName: 'contentful',
    })
  }
}
