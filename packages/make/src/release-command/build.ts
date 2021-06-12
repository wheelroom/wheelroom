/**
 * A note on removing the 'exports' & 'typesVersions' key in the 'updatePackage' before
 * publishing. In the package folder we use a package.json with:
 * ```
 *  "exports": {
 *    "./*": "./build/*"
 *  },
 *  "typesVersions" {
 *    "./*": './build/*'
 *  }
 * ```
 * When we publish from the build folder the exported files are in the root and
 * we do not need this mapping anymore.
 *
 */

import { mkdir } from 'fs/promises'
import { MakeContext } from '../lib/make-context-factory'
import { writeNodeSync } from '../lib/read-write-node'
import { npmRun } from '../lib/run'

export interface BuildMakeContext {
  makeContext: MakeContext
}

export const buildPackage = async ({ makeContext }: BuildMakeContext) => {
  // Build all nodes
  for (const buildNode of makeContext.buildNodes) {
    await npmRun({ args: ['build'], node: buildNode })
  }
}

export const buildCloneDir = async ({ makeContext }: BuildMakeContext) => {
  const { rootNode, buildNodes, cloneDir } = makeContext
  // Write package.json copy to cloneDir
  for (const preparePublishNodes of buildNodes) {
    await mkdir(`${preparePublishNodes.path}/${cloneDir}`, { recursive: true })
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
        typesVersions: undefined,
      },
    })
  }
}
