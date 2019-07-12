#!/usr/bin/env node

import * as yargs from 'yargs'

const addOptions = (cli: any) => {
  const options = {
    filter: {
      describe: 'Filter by componentType',
      requiresArg: true,
      type: 'string',
    },
  }

  return cli.options(options).alias('f', 'filter')
}

export const baseCli = (argv: string[]) => {
  const cli = yargs(argv)

  return addOptions(cli)
    .usage('Usage: $0 <command> [options]')
    .demandCommand(1, 'Command required. Use --help to list all commands.')
    .recommendCommands()
    .strict()
    .alias('h', 'help')
    .alias('v', 'version')
}
