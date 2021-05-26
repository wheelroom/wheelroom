/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

import dotenv from 'dotenv'

// Will read GITHUB_TOKEN from .env.developemnt
dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { releaseCommand } from './packages/make/build/commands/release-command.js'
import { linkCommand } from './packages/make/build/commands/link-command.js'
import { listCommand } from './packages/make/build/commands/list-command.js'

const packagePositional = (yargs) => {
  yargs.positional('package', {
    type: 'string',
    describe: 'full package name with organisation',
  })
}
const pathPositional = (yargs) => {
  yargs.positional('path', {
    type: 'string',
    describe: 'path to npm 7 monorepo',
  })
}

yargs(hideBin(process.argv))
  .scriptName('make')
  .usage('$0 <cmd> [args]')
  .command(
    'build [package]',
    'build a package',
    packagePositional,
    function (argv) {
      releaseCommand({ packageName: argv.package, subCommand: 'build' })
    }
  )
  .command(
    'version [package]',
    'bumps package and related packages to their new versions',
    packagePositional,
    function (argv) {
      releaseCommand({ packageName: argv.package, subCommand: 'version' })
    }
  )
  .command(
    'publish [package]',
    'publish package to package repository and commit/push to git repository',
    packagePositional,
    function (argv) {
      releaseCommand({ packageName: argv.package, subCommand: 'publish' })
    }
  )
  .command(
    'release [package]',
    'run all three: build, version and publish',
    packagePositional,
    function (argv) {
      releaseCommand({ packageName: argv.package })
    }
  )
  .command(
    'link [path]',
    'create links to monorepo in node_modules',
    pathPositional,
    function (argv) {
      linkCommand({ monoRepoPath: argv.path })
    }
  )
  .command(
    'list [path]',
    'list packages in monorepo',
    pathPositional,
    function (argv) {
      listCommand({ monoRepoPath: argv.path })
    }
  )
  .demandCommand()
  .help().argv
