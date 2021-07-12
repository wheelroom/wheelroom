import yargs from 'yargs'
import { PullArgv } from '../cli'
import { callPullHandler } from '../lib/call-pull-handler'

export interface PullCommand {
  argv: yargs.Arguments<PullArgv>
}

// TODO: Make pluginName a cli parameter
export const pullCommand = async ({ argv }: PullCommand) => {
  if (argv.type === 'content') {
    await callPullHandler({
      path: argv.path,
      pluginName: 'contentful',
      callType: 'pullContent',
    })
  }
  if (argv.type === 'models') {
    await callPullHandler({
      path: argv.path,
      pluginName: 'contentful',
      callType: 'pullModels',
    })
  }
}
