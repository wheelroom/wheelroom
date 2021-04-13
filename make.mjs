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
import { runCommand } from './packages/make/build/commands/run-command.js'
import { linkCommand } from './packages/make/build/commands/link-command.js'

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

yargs
  .scriptName('make')
  .usage('$0 <cmd> [args]')
  .command(
    'build [package]',
    'build a package',
    packagePositional,
    function (argv) {
      runCommand({ packageName: argv.package, command: 'build' })
    }
  )
  .command(
    'version [package]',
    'bumps package and related packages to their new versions',
    packagePositional,
    function (argv) {
      runCommand({ packageName: argv.package, command: 'version' })
    }
  )
  .command(
    'publish [package]',
    'publish package to package repository and commit/push to git repository',
    packagePositional,
    function (argv) {
      runCommand({ packageName: argv.package, command: 'publish' })
    }
  )
  .command(
    'release [package]',
    'run all three: build, version and publish',
    packagePositional,
    function (argv) {
      runCommand({ packageName: argv.package, command: 'release' })
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
  .demandCommand()
  .help().argv
