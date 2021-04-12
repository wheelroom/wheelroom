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
  commitTypes,
  deepMerge,
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
  let arborist = new Arborist({ path: '.' })
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

  // Refresh fsChildren now that package is released
  process.chdir(rootNode.path)
  arborist = new Arborist({ path: '.' })
  console.log('new arborist', arborist)
  rootNode = await arborist.loadActual()
  console.log('new rootNode', rootNode)
  fsChildren = rootNode.fsChildren
  console.log('new fsChildren', fsChildren)
  targetNode = getFsChild({ fsChildren, packageName })
  console.log('new targetNode', targetNode)

  console.log('targetNode name', targetNode.package.name)
  console.log('targetNode version', targetNode.package.version)
  if (targetNode.package.version) {
    process.exit(0)
  }

  // Update root package version with released target
  deepMerge({
    target: rootNode.package,
    source: { version: targetNode.package.version },
  })

  const cloneDir = 'build'
  const syncedNodes = getSyncedNodes({ node: targetNode, fsChildren })
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
    if (['release', 'publish'].includes(command)) {
      updateEdgesOut({ node: buildNode, fsChildren })
    }
  }
  // Write all changes to all nodes
  fsChildren.forEach((node: Node) => writeNodeSync({ node }))
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
