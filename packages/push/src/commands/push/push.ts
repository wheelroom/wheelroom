import { existsSync } from 'fs'
import ts from 'typescript'
import chalk from 'chalk'
import yargs from 'yargs'
import { PushArgv } from '../../cli'
import { getAllPluginData } from '../../lib/get-all-plugin-data/get-all-plugin-data'
import { getCompilerOptions } from '../../lib/get-compiler-options'
import { callHandler } from '../../lib/call-handler'

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
  const allPluginData = getAllPluginData({ program })
  if (Object.keys(allPluginData).length < 1) {
    log(chalk.red(`Nothing to process in file: ${argv.file}`))
    return
  }

  for (const pluginName of Object.keys(allPluginData)) {
    await callHandler({
      callType: argv.type,
      callCommand: 'push',
      pluginData: allPluginData[pluginName],
      pluginName,
    })
  }
}
