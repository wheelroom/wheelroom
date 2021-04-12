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
    'release [package]',
    'build and release a package (set a new version but do not publish)',
    packagePositional,
    function (argv) {
      runCommand({ packageName: argv.package, command: 'release' })
    }
  )
  .command(
    'publish [package]',
    'build, release and publish a package (set a new version and publish to registry)',
    packagePositional,
    function (argv) {
      runCommand({ packageName: argv.package, command: 'publish' })
    }
  )
  .demandCommand()
  .help().argv
