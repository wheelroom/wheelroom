#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { listCmdBuilder } from '../commands/list/command'
import { readConfig } from '../config/read-config'
import { baseCli } from './base-cli'
import { commandsFromPlugins } from './commands-from-plugins'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const main = async (argv: string[]) => {
  const cli = baseCli(argv)
  const config = await readConfig()
  const commands = commandsFromPlugins(config)
  const context = {
    config,
  }

  const cliWithCommands = commands.reduce(
    (newCli, command) => newCli.command(command),
    cli
  )

  return cliWithCommands.command(listCmdBuilder).parse(argv, context)
}

main(process.argv.slice(2))
