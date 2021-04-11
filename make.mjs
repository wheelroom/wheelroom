/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

/**
 * A note on removing the 'exports' key in the 'updatePackage' before
 * publishing. In the package folder we use a package.json with:
 * ```
 *  "exports": {
 *    "./*": "./build/*.js"
 *  },
 * ```
 * When we publish from the build folder the exported files are in the root and
 * we do not need this mapping anymore.
 *
 */

import { mkdir } from 'fs/promises'
import Arborist from '@npmcli/arborist'
import standardVersion from 'standard-version'
import yargs from 'yargs'
import {
  cloneToDirSync,
  commitTypes,
  deepMerge,
  getSyncedNodes,
  npmRun,
  updateEdgesOut,
  writeNodeSync,
} from './packages/make/build/npm.js'

const runCommand = async ({ packageName, command }) => {
  const arborist = new Arborist({ path: '.' })
  let rootNode = await arborist.loadActual()
  let allNodes = Array.from(rootNode.fsChildren)
  let targetNode = allNodes.find((node) => node.package.name === packageName)

  const nodeNames = allNodes.map((node) => node.package.name)

  if (!targetNode) {
    console.log(
      `Package ${
        packageName || 'parameter'
      } not found, please choose from: ${nodeNames.join(', ')}`
    )
    process.exit(0)
  }

  if (['release', 'publish'].includes(command)) {
    // Copy root version to target package and release with standard-version
    deepMerge({
      target: targetNode.package,
      source: { version: rootNode.package.version },
    })
    writeNodeSync({ node: targetNode })
    process.chdir(targetNode.path)
    await standardVersion({
      path: '.',
      skip: { commit: true },
      tagPrefix: targetNode.package.name,
      types: commitTypes,
    })
  }

  // Refresh allNodes now that package is released
  rootNode = await arborist.loadActual()
  allNodes = Array.from(rootNode.fsChildren)
  targetNode = allNodes.find((node) => node.package.name === packageName)

  // Update root package version with released target
  deepMerge({
    target: rootNode.package,
    source: { version: targetNode.package.version },
  })

  const cloneDir = 'build'
  const syncedNodes = getSyncedNodes({ node: targetNode, allNodes })
  const buildNodes = [targetNode, ...syncedNodes]
  const clonedNodes = []
  for (const buildNode of buildNodes) {
    await npmRun({ args: ['build'], node: buildNode })
    await mkdir(`${buildNode.path}/${cloneDir}`, { recursive: true })
    cloneToDirSync({
      node: buildNode,
      cloneDir,
      fileNameList: ['CHANGELOG.md', 'README.md'],
    })
    clonedNodes.push({
      cloneDir,
      node: buildNode,
      packageObject: {
        author: rootNode.package.author,
        engines: rootNode.package.engines,
        exports: undefined,
        repository: rootNode.package.repository,
        publishConfig: rootNode.package.publishConfig,
      },
    })
    if (['release', 'publish'].includes(command)) {
      updateEdgesOut({ node: buildNode, allNodes })
    }
  }
  // Write all changes to all nodes
  allNodes.forEach((node) => writeNodeSync({ node }))
  // Create cloned package.json's in cloneDirs
  clonedNodes.forEach((clone) =>
    writeNodeSync({
      node: clone.node,
      cloneDir: clone.cloneDir,
      packageObject: clone.packageObject,
    })
  )
  if (command === 'publish') {
    for (const publishNode of buildNodes) {
      await npmRun({
        args: ['publish'],
        cloneDir,
        node: publishNode,
      })
    }
    console.log(`\ngit push --follow-tags origin next`)
  }
}

/**
 *
 * Command line parameter defs below
 */
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
