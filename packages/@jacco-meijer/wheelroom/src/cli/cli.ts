#!/usr/bin/env node

import { command as listCommand } from '../commands/list/command'
import { getCommands } from '../lib/config/get-commands'
import { getComponents } from '../lib/config/get-components'
import { getPluginOptions } from '../lib/config/get-plugin-options'
import { readConfig } from '../lib/config/read-config'
import { getAppDir } from '../lib/get-app-dir'
import { baseCli } from './base-cli'

const main = async (argv: string[]) => {
  const cli = baseCli(argv)
  const config = await readConfig(getAppDir())
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
