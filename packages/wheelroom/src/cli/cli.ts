#!/usr/bin/env node

import { baseCli } from './base-cli'
import { command as listCommand } from '../commands/list/command'
import { getAppDir } from '../lib/get-app-dir'
import { getCommands } from '../lib/config/get-commands'
import { getComponents } from '../lib/config/get-components'
import { getPluginOptions } from '../lib/config/get-plugin-options'
import { readConfig } from '../lib/config/read-config'
import { translateComponents } from '../lib/config/translate-components'

const main = async (argv: string[]) => {
  const params = baseCli(argv).parse(argv)
  const configFile = params.config

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

  const locale = params.locale || config.locale || 'en-US'

  const components = await getComponents(config)
  const commands = await getCommands(config)
  const options = getPluginOptions(config)

  translateComponents(components, locale)

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
