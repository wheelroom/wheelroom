import { existsSync } from 'fs'
import ts from 'typescript'
import chalk from 'chalk'
import yargs from 'yargs'
import { getAllPluginData } from '../../lib/get-all-plugin-data/get-all-plugin-data'
import { getCompilerOptions } from '../../lib/get-compiler-options/get-compiler-options'
import { ArgvType, callHandler } from '../../lib/call-handler'

export type PushArgv = {
  type: ArgvType
  file: string
}

export interface PushCommand {
  argv: yargs.Arguments<PushArgv>
}

export const pushCommand = async ({ argv }: PushCommand) => {
  const log = console.log
  log(chalk.bold.underline(`\nAnalyzing source files`))
  if (!existsSync(argv.file)) {
    log(chalk.red(`- file not found: ${argv.file}`))
    return
  }
  const compilerOptions = getCompilerOptions()
  const program = ts.createProgram([argv.file], compilerOptions.options)
  const allPluginData = getAllPluginData({ program })
  if (Object.keys(allPluginData).length < 1) {
    log(chalk.red(`- nothing to process in file: ${argv.file}`))
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
