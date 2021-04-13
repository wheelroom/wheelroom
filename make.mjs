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
import { runCommand } from './packages/make/build/run-command.js'

const packagePositional = (yargs) => {
  yargs.positional('package', {
    type: 'string',
    describe: 'full package name with organisation',
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
    'runn all three: build, version and publish',
    packagePositional,
    function (argv) {
      runCommand({ packageName: argv.package, command: 'release' })
    }
  )
  .demandCommand()
  .help().argv
