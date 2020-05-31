#!/usr/bin/env node

import { command as listCommand } from '../commands/list/command'
import { getCommands } from '../lib/config/get-commands'
import { getComponents } from '../lib/config/get-components'
import { getPluginOptions } from '../lib/config/get-plugin-options'
import { readConfig } from '../lib/config/read-config'
import { getAppDir } from '../lib/get-app-dir'
import { baseCli } from './base-cli'

const main = async (argv: string[]) => {
  const params = baseCli(argv).parse(argv)
  const configFile = params.config
  const locale = params.locale

  const config = await readConfig(getAppDir(), configFile)
  if (!config) {
    console.log(
      `Aborting: config not found. Suggestions:
- compile the config from typescript
- check the --config option, now set to: ${configFile}
- the path to the config file is relative from ${getAppDir()}
`
    )
    return
  }

  const components = await getComponents(config, locale)
  const commands = await getCommands(config)
  const options = getPluginOptions(config)

  const context = {
    components,
    options,
  }

  const cli = baseCli(argv)
  // Add commands
  const cliWithCommands = commands.reduce(
    (newCli, command) => newCli.command(command),
    cli
  )

  // Add list command and arguments
  return cliWithCommands.command(listCommand).parse(argv, context)
}

main(process.argv.slice(2))
