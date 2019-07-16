#!/usr/bin/env node

import { command as listCommand } from '../commands/list/command'
import { getCommands } from '../lib/get-commands'
import { getComponents } from '../lib/get-components'
import { getPluginOptions } from '../lib/get-plugin-options'
import { readConfig } from '../lib/read-config'
import { baseCli } from './base-cli'

const main = async (argv: string[]) => {
  const cli = baseCli(argv)
  const config = await readConfig()
  const components = await getComponents(config)
  const commands = await getCommands(config)
  const options = getPluginOptions(config)

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
