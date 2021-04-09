/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

import { mkdir } from 'fs/promises'
import Arborist from '@npmcli/arborist'
import standardVersion from 'standard-version'
import yargs from 'yargs'
import {
  buildTask,
  cloneToDirSync,
  getDependencyList,
  getRecursiveDependencyList,
  readPackageSync,
  updateDependencyVersions,
  updatePackage,
} from './packages/make/build/npm.js'

const commitTypes = [
  { type: 'feat', section: 'Features' },
  { type: 'fix', section: 'Bug Fixes' },
  { type: 'chore', section: 'Commits' },
  { type: 'docs', section: 'Documentation' },
  { type: 'style', section: 'Styling' },
  { type: 'refactor', section: 'Code Refactoring' },
  { type: 'perf', hidden: true },
  { type: 'test', hidden: true },
]

const updatePackagesToUseNewVersion = ({ nodes, targetNode }) => {
  console.log(
    `Updating all packages that use ${targetNode.package.name} to use the new version ${targetNode.package.version}`
  )
  const dependencyList = getDependencyList({ nodes, targetNode })
  updateDependencyVersions({
    dependencyList,
    version: targetNode.package.version,
  })
}

const publishPackage = async ({ args, command }) => {
  const { nodes, targetNode, rootPkg } = args
  console.log(
    `\n=======> Building and cloning package ${targetNode.package.name} ${targetNode.package.version}`
  )
  if (['release', 'publish'].includes(command)) {
    updatePackagesToUseNewVersion({ nodes, targetNode })
  }
  await buildTask({ cmd: 'npm', args: ['run', 'build'], cwd: targetNode.path })

  const cloneDir = 'build'
  await mkdir(`${targetNode.path}/${cloneDir}`, { recursive: true })
  cloneToDirSync({
    node: targetNode,
    cloneDir,
    fileNameList: ['package.json', 'CHANGELOG.md', 'README.md'],
  })
  /**
   * A small note on removing the 'exports' key in the 'updatePackage' function
   * below. In the package folder we use a package.json with:
   * ```
   *  "exports": {
   *    "./*": "./build/*.js"
   *  },
   * ```
   * When we publish from the build folder the exported files are in the root
   * and we do not need this mapping anymore.
   *
   */
  updatePackage({
    node: targetNode,
    cloneDir: 'build',
    packageObject: {
      author: rootPkg.author,
      engines: rootPkg.engines,
      exports: undefined,
      repository: rootPkg.repository,
      publishConfig: rootPkg.publishConfig,
    },
  })
  if (command === 'publish') {
    console.log(
      `Publishing ${targetNode.package.name} ${targetNode.package.version}`
    )
    await buildTask({
      cmd: 'npm',
      args: ['publish'],
      cwd: `${targetNode.path}/build`,
    })
  }
}

const runCommand = async ({ packageName, command }) => {
  const arborist = new Arborist({ path: '.' })
  const rootNode = await arborist.loadActual()
  const nodes = Array.from(rootNode.fsChildren)
  const nodeNames = nodes.map((child) => child.package.name)
  const targetNode = nodes.find((child) => child.package.name === packageName)
  const publishList = []

  if (!targetNode) {
    console.log(
      `Package ${packageName} not found, please choose from: ${nodeNames.join(
        ', '
      )}`
    )
    process.exit(0)
  }

  const rootPkg = readPackageSync({ node: rootNode })
  if (['release', 'publish'].includes(command)) {
    console.log(`Bumping package ${targetNode.package.name}`)
    updatePackage({
      node: targetNode,
      packageObject: { version: rootPkg.version },
    })
    process.chdir(targetNode.path)
    await standardVersion({
      path: '.',
      skip: { commit: true },
      tagPrefix: targetNode.package.name,
      types: commitTypes,
    })
    const targetPkg = readPackageSync({ node: targetNode })
    targetNode.package.version = targetPkg.version
    console.log(
      `\nUpdating root package to version ${targetNode.package.version}`
    )
    updatePackage({
      node: rootNode,
      packageObject: { version: targetNode.package.version },
    })
    console.log(
      `\nSetting all packages that use ${targetNode.package.name} to version ${targetNode.package.version}`
    )
    const recursiveDependencyList = []
    getRecursiveDependencyList({
      targetNode,
      nodes,
      dependencyList: recursiveDependencyList,
    })
    for (const dep of recursiveDependencyList) {
      updatePackage({
        node: dep.node,
        packageObject: { version: targetNode.package.version },
      })
      console.log(
        `Package ${dep.node.package.name} set to ${targetNode.package.version}. Will publish this package later.`
      )
      dep.node.package.version = targetNode.package.version
      publishList.push({ nodes, targetNode: dep.node, rootPkg })
    }
  }
  if (command === 'publish') {
    console.log(`\nBuilding and publishing all packages to registry`)
  }
  if (command === 'build') {
    console.log(`\nBuilding all packages`)
  }

  publishList.push({ nodes, targetNode, rootPkg })
  for (const publishArg of publishList) {
    await publishPackage({ args: publishArg, command })
  }

  if (['release', 'publish'].includes(command)) {
    console.log(`\ngit push --follow-tags origin next`)
  }
}
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
