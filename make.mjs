/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish to npm
 *
 */

// TODO: Commit changes to packages that depend on target

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

const publish = async ({ packageName }) => {
  const arborist = new Arborist({ path: '.' })
  const rootNode = await arborist.loadActual()
  const nodes = Array.from(rootNode.fsChildren)
  const nodeNames = nodes.map((child) => child.package.name)
  const targetNode = nodes.find((child) => child.package.name === packageName)

  if (!targetNode) {
    console.log(
      `Package ${packageName} not found, please choose from: ${nodeNames.join(
        ', '
      )}`
    )
    process.exit(0)
  }

  console.log(`Bumping package ${targetNode.package.name}`)
  const rootPkg = readPackageSync({ node: rootNode })
  updatePackage({
    node: targetNode,
    packageObject: { version: rootPkg.version },
  })
  process.chdir(targetNode.path)
  await standardVersion({
    // TODO: Check if this filters the path correctly
    path: targetNode.path,
    tagPrefix: targetNode.package.name,
    types: commitTypes,
  })
  const targetPkg = readPackageSync({ node: targetNode })

  console.log(`Updating root package to version ${targetPkg.version}`)
  updatePackage({
    node: rootNode,
    packageObject: { version: targetPkg.version },
  })

  console.log(
    `Setting all packages that use ${targetPkg.name} to version ${targetPkg.version}`
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
      packageObject: { version: targetPkg.version },
    })
    console.log(`Package ${dep.node.package.name} set to ${targetPkg.version}`)
  }

  console.log(
    `Updating all packages that use ${targetPkg.name} to use the new version ${targetPkg.version}`
  )
  const dependencyList = getDependencyList({ nodes, targetNode })
  updateDependencyVersions({ dependencyList, version: targetPkg.version })
  console.log(`Clone and publish target package ${targetPkg.name}`)
  await buildTask({ cmd: 'npm', args: ['run', 'build'], cwd: targetNode.path })
  cloneToDirSync({
    node: targetNode,
    cloneDir: 'build',
    fileNameList: ['package.json', 'CHANGELOG.md', 'README.md'],
  })
  updatePackage({
    node: targetNode,
    cloneDir: 'build',
    json: {
      keywords: rootPkg.keywords,
      homepage: rootPkg.homepage,
      bugs: rootPkg.bugs,
      repository: rootPkg.repository,
      license: rootPkg.license,
      author: rootPkg.author,
      contributors: rootPkg.contributors,
      engines: rootPkg.engines,
      publishConfig: rootPkg.publishConfig,
    },
  })
  await buildTask({
    cmd: 'npm',
    args: ['publish'],
    cwd: `${targetNode.path}/build`,
  })
  console.log('git push --follow-tags origin next')
}

yargs
  .scriptName('make')
  .usage('$0 <cmd> [args]')
  .command(
    'publish [package]',
    'build, bump and publish to npm',
    (yargs) => {
      yargs.positional('package', {
        type: 'string',
        describe: 'full package name with organisation',
      })
    },
    function (argv) {
      publish({ packageName: argv.package })
    }
  )
  .demandCommand()
  .help().argv
