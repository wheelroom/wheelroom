#!/usr/bin/env node

/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const pushCommand = ({ argv }: { argv: yargs.Arguments }) => {
  console.log('push command running', argv)
}

const contentSourceFilePositional = (yargs: yargs.Argv<any>) => {
  yargs.positional('contentSourceFile', {
    type: 'string',
    describe: 'contentSourceFile to npm 7 monorepo',
  })
}

const options: { [option: string]: yargs.Options } = {
  filter: {
    alias: 'f',
    describe: 'Filter by componentType',
    requiresArg: true,
    type: 'string',
  },
  locale: {
    alias: 'l',
    describe: 'Override locale in config',
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

yargs(hideBin(process.argv))
  .scriptName('wheelroom')
  .usage('Usage: $0 <command> [options]')
  .demandCommand(1, 'Command required. Use --help to list all commands.')
  .recommendCommands()
  .strict()
  .alias('h', 'help')
  .alias('v', 'version')
  .wrap(yargs.terminalWidth())
  .command(
    'push [contentSourceFile]',
    'push models or content to content platform',
    contentSourceFilePositional,
    function (argv: yargs.Arguments) {
      pushCommand({ argv })
    }
  )
  .options(options)
  .demandCommand()
  .help().argv
