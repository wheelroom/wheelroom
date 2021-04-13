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
import { cloneToDirSync, npmRun, writeNodeSync } from './npm'

export interface BuildPackage {
  buildNodes: any
}

export const buildPackage = async ({ buildNodes }: BuildPackage) => {
  // Build all nodes
  for (const buildNode of buildNodes) {
    await npmRun({ args: ['build'], node: buildNode })
  }
}

export interface BuildCloneDir {
  buildNodes: any
  cloneDir: string
  rootNode: any
}

export const buildCloneDir = async ({
  rootNode,
  buildNodes,
  cloneDir,
}: BuildCloneDir) => {
  // Write package.json copy to cloneDir
  for (const preparePublishNodes of buildNodes) {
    await mkdir(`${preparePublishNodes.path}/${cloneDir}`, { recursive: true })
    cloneToDirSync({
      node: preparePublishNodes,
      cloneDir,
      fileNameList: ['CHANGELOG.md', 'README.md', 'LICENSE'],
    })
    writeNodeSync({
      node: preparePublishNodes,
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
}
