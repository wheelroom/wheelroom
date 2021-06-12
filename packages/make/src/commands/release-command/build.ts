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

import { npmRun } from '../../lib/run'
import { MakeContext } from './make-context-factory'

export interface BuildMakeContext {
  makeContext: MakeContext
}

export const buildPackage = async ({ makeContext }: BuildMakeContext) => {
  // Build all nodes
  for (const buildNode of makeContext.buildNodes) {
    await npmRun({ args: ['build'], node: buildNode })
  }
}
