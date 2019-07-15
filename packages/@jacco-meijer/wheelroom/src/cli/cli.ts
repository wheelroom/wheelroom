#!/usr/bin/env node

import { command as listCommand } from '../commands/list/command'
import { getComponents } from '../config/get-components'
import { readConfig } from '../config/read-config'
import { baseCli } from './base-cli'
import { commandsFromPlugins } from './commands-from-plugins'

const main = async (argv: string[]) => {
  const cli = baseCli(argv)
  const config = await readConfig()
  const components = await getComponents(config)
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
