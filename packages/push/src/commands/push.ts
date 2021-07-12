import ts from 'typescript'
import yargs from 'yargs'
import { PushArgv } from '../cli'
import { getCompilerOptions } from '../lib/get-compiler-options'
import { callPushHandler } from '../lib/call-push-handler'
import { getPushData } from '../lib/get-push-data'

export interface PushCommand {
  argv: yargs.Arguments<PushArgv>
}

export const pushCommand = async ({ argv }: PushCommand) => {
  const compilerOptions = getCompilerOptions()
  const program = ts.createProgram([argv.file], compilerOptions.options)
  const pushData = getPushData({ program })

  if (argv.type === 'content') {
    await callPushHandler({ pushData, callType: 'pushContent' })
  }
  if (argv.type === 'models') {
    await callPushHandler({ pushData, callType: 'pushModels' })
  }
}
