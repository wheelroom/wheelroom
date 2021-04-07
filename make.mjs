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
  readPackageSync,
  updateClonedPackage,
  updateDependencyVersions,
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
  console.log(`Bumping root package`)
  process.chdir(targetNode.path)
  await standardVersion({
    bumpFiles: [`${rootNode.path}/package.json`],
    path: targetNode.path,
    tagPrefix: '@wheelroom/any',
    types: commitTypes,
  })
  console.log('done')
  process.exit(1)

  await buildTask({
    cmd: 'npm',
    args: ['run', 'release'],
    cwd: targetNode.path,
  })

  const targetPkg = readPackageSync({ node: targetNode })

  console.log(
    `Releasing (not publishing) all packages to same version: ${targetPkg.version}`
  )
  for (const node of [rootNode, ...nodes]) {
    await buildTask({
      cmd: 'npm',
      args: ['run', 'release', '--', '--release-as', targetPkg.version],
      cwd: node.path,
    })
  }

  console.log(`Updating packages that depend on ${targetNode.package.name}`)
  const dependencyList = getDependencyList({ nodes, targetNode })
  updateDependencyVersions({ dependencyList, version: targetPkg.version })

  console.log(`Clone and publish target package ${targetNode.package.name}`)
  await buildTask({ cmd: 'npm', args: ['run', 'build'], cwd: targetNode.path })
  cloneToDirSync({
    node: targetNode,
    cloneDir: 'build',
    fileNameList: ['package.json', 'CHANGELOG.md', 'README.md'],
  })
  const rootPkg = readPackageSync({ node: rootNode })
  updateClonedPackage({
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
