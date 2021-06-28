import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

type PushArgv = {
  type: 'content' | 'models'
  file: string
}

const pushCommand = ({ argv }: { argv: yargs.Arguments<PushArgv> }) => {
  console.log(`push/${argv.type} file:${argv.file}`)
}

type PullArgv = {
  type: 'content' | 'models'
  file: string
}

const pullCommand = ({ argv }: { argv: yargs.Arguments<PullArgv> }) => {
  console.log(`pull/${argv.type} path:${argv.path}`)
}

type WheelroomOptions = {
  filter: yargs.Options
  locale: yargs.Options
  outside: yargs.Options
  yes: yargs.Options
}

const options: WheelroomOptions = {
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
    describe: 'Follow imports outside file folder',
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
    'push <type> <file>',
    'push models or content to content platform',
    (yargs) => {
      yargs
        .positional('type', {
          type: 'string',
          describe: 'push models or content',
          choices: ['models', 'content'],
        })
        .positional('file', {
          type: 'string',
          describe: 'path to source file',
        })
    },
    (argv: yargs.Arguments<PushArgv>) => {
      pushCommand({ argv })
    }
  )
  .command(
    'pull <type> <path>',
    'pull models or content from content platform',
    (yargs: yargs.Argv<any>) => {
      yargs
        .positional('type', {
          type: 'string',
          describe: 'pull models or content',
          choices: ['models', 'content'],
        })
        .positional('path', {
          type: 'string',
          describe: 'path where source files are created',
        })
    },
    (argv: yargs.Arguments<PullArgv>) => {
      pullCommand({ argv })
    }
  )
  .options(options)
  .demandCommand()
  .help().argv
