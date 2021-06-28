import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const pushCommand = ({ argv }: { argv: yargs.Arguments }) => {
  console.log('push command running', argv)
}

const options: { [option: string]: yargs.Options } = {
  filter: {
    alias: 'f',
    describe: 'Filter by type value @wheelroom {@type value}',
    requiresArg: true,
    type: 'string',
  },
  locale: {
    alias: 'l',
    describe: 'Override @wheelroom {@locale}',
    requiresArg: true,
    type: 'string',
  },
  outside: {
    alias: 'o',
    describe: 'Follow imports outside folder where source file is in',
    requiresArg: false,
    type: 'boolean',
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
  .wrap(null)
  .command(
    'push <target> <sourceFile>',
    'push models or content to content platform',
    (yargs: yargs.Argv<any>) => {
      yargs
        .positional('target', {
          type: 'string',
          describe: 'push models',
          choices: ['models', 'content'],
        })
        .positional('sourceFile', {
          type: 'string',
          describe: 'path to sourceFile',
        })
    },
    function (argv: yargs.Arguments) {
      pushCommand({ argv })
    }
  )
  .command(
    'push <target> <sourceFile>',
    'push models or content to content platform',
    (yargs: yargs.Argv<any>) => {
      yargs
        .positional('target', {
          type: 'string',
          describe: 'push models',
          choices: ['models', 'content'],
        })
        .positional('sourceFile', {
          type: 'string',
          describe: 'path to sourceFile',
        })
    },
    function (argv: yargs.Arguments) {
      pushCommand({ argv })
    }
  )
  .options(options)
  .demandCommand()
  .help().argv
