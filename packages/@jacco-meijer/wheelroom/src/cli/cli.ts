#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { command as listCommand } from '../commands/list/command'
import { getPassedToPlugins } from '../config/get-passed-to-plugin'
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
  const components = await getPassedToPlugins(config)
  const commands = await commandsFromPlugins(config)

  const options = config.plugins.reduce((result: any, plugin) => {
    result[plugin.resolve] = plugin.options
    return result
  }, {})

  const context = {
    components,
    options,
  }

  const cliWithCommands = commands.reduce(
    (newCli, command) => newCli.command(command),
    cli
  )

  return cliWithCommands.command(listCommand).parse(argv, context)
}

main(process.argv.slice(2))
