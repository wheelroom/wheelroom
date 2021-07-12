import ts from 'typescript'
import yargs from 'yargs'
import { PushArgv } from '../cli'
import { getCompilerOptions } from '../lib/get-compiler-options'
import { callPushHandler } from '../lib/call-push-handler'
import { getPluginData } from '../lib/get-plugin-data'

export interface PushCommand {
  argv: yargs.Arguments<PushArgv>
}

export const pushCommand = async ({ argv }: PushCommand) => {
  const compilerOptions = getCompilerOptions()
  const program = ts.createProgram([argv.file], compilerOptions.options)
  const pluginData = getPluginData({ program })

  if (argv.type === 'content') {
    await callPushHandler({ pluginData, callType: 'pushContent' })
  }
  if (argv.type === 'models') {
    await callPushHandler({ pluginData, callType: 'pushModels' })
  }
}
