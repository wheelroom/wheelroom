import { existsSync } from 'fs'
import ts from 'typescript'
import chalk from 'chalk'
import yargs from 'yargs'
import { PushArgv } from '../cli'
import { getPluginData } from '../lib/get-plugin-data'
import { getCompilerOptions } from '../lib/get-compiler-options'
import { callPushHandler } from '../lib/call-push-handler'

export interface PushCommand {
  argv: yargs.Arguments<PushArgv>
}

export const pushCommand = async ({ argv }: PushCommand) => {
  const log = console.log
  if (!existsSync(argv.file)) {
    log(chalk.red(`File not found: ${argv.file}`))
    return
  }
  const compilerOptions = getCompilerOptions()
  const program = ts.createProgram([argv.file], compilerOptions.options)
  const pluginData = getPluginData({ program })
  if (Object.keys(pluginData).length < 1) {
    log(chalk.red(`Nothing to process in file: ${argv.file}`))
    return
  }

  if (argv.type === 'content') {
    await callPushHandler({ pluginData, callType: 'pushContent' })
  }
  if (argv.type === 'models') {
    await callPushHandler({ pluginData, callType: 'pushModels' })
  }
}
