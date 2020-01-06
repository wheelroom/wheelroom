#!/usr/bin/env node

import yargs from 'yargs'

const addOptions = (cli: any) => {
  const options = {
    config: {
      describe: 'Use specific config',
      requiresArg: false,
      type: 'string',
    },
    filter: {
      alias: 'f',
      describe: 'Filter by componentType',
      requiresArg: true,
      type: 'string',
    },
    yes: {
      alias: 'y',
      describe: 'Answer yes to all questions',
      requiresArg: false,
      type: 'boolean',
    },
  }

  return cli.options(options)
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
