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
import {
  Node,
  cloneToDirSync,
  cmdRun,
  commitTypes,
  getFsChild,
  getFsChildPackageNames,
  getSyncedNodes,
  npmRun,
  updateEdgesOut,
  writeNodeSync,
} from './npm'

interface RunCommand {
  packageName: string
  command: string
}

export const runCommand = async ({ packageName, command }: RunCommand) => {
  let arborist = new Arborist({ path: process.cwd() })
  let rootNode = await arborist.loadActual()
  let fsChildren = rootNode.fsChildren
  let targetNode = getFsChild({ fsChildren, packageName })
  const packageNames = getFsChildPackageNames({ fsChildren })

  if (!targetNode) {
    console.log(
      `Package ${
        packageName || 'parameter'
      } not found, please choose from: ${packageNames.join(', ')}`
    )
    process.exit(0)
  }

  if (['release', 'publish'].includes(command)) {
    // Copy root version to target package and release with standard-version
    targetNode.package.version = rootNode.package.version
    writeNodeSync({ node: targetNode })
    process.chdir(targetNode.path)
    await standardVersion({
      path: targetNode.path,
      skip: { commit: true },
      tagPrefix: `${targetNode.package.name}@`,
      types: commitTypes,
      // dryRun: true,
    })
    process.chdir(rootNode.path)
  }

  // Refresh fsChildren now that package is released
  arborist = new Arborist({ path: process.cwd() })
  rootNode = await arborist.loadActual()
  fsChildren = rootNode.fsChildren
  targetNode = getFsChild({ fsChildren, packageName })

  // Update root package version with released target
  rootNode.package.version = targetNode.package.version
  const fsChildrenPlusRoot = new Set(fsChildren) as Set<Node>
  fsChildrenPlusRoot.add(rootNode)

  const syncedNodes = getSyncedNodes({ node: targetNode, fsChildren })
  const buildNodes = [targetNode, ...syncedNodes]
  // Make packages depend on new version of package
  if (['release', 'publish'].includes(command)) {
    for (const buildNode of buildNodes) {
      updateEdgesOut({ node: buildNode, fsChildrenPlusRoot })
    }
  }
  // Write package.json copy to cloneDir
  const cloneDir = 'build'
  for (const prepareBuildNode of buildNodes) {
    await mkdir(`${prepareBuildNode.path}/${cloneDir}`, { recursive: true })
    cloneToDirSync({
      node: prepareBuildNode,
      cloneDir,
      fileNameList: ['CHANGELOG.md', 'README.md'],
    })
    writeNodeSync({
      node: prepareBuildNode,
      cloneDir,
      packageObject: {
        author: rootNode.package.author,
        bugs: rootNode.package.bugs,
        contributors: rootNode.package.contributors,
        engines: rootNode.package.engines,
        exports: undefined,
        homepage: rootNode.package.homepage,
        keywords: rootNode.package.keywords,
        license: rootNode.package.license,
        publishConfig: rootNode.package.publishConfig,
        repository: rootNode.package.repository,
      },
    })
  }
  // Write all changes to all nodes
  writeNodeSync({ node: rootNode })
  fsChildrenPlusRoot.forEach((node: Node) => writeNodeSync({ node }))
  await cmdRun({ cmd: 'npm', args: ['install'], node: rootNode })
  for (const buildNode of buildNodes) {
    await npmRun({ args: ['build'], node: buildNode })
  }
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
