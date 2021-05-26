/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

import { getMakeContext } from '../lib/get-make-context'
import { getFsChildPackageNames } from '../lib/arborist'
import { buildCloneDir, buildPackage } from '../lib/build'
import { publish } from '../lib/publish'
import {
  getNewChangelogs,
  versionDependencies,
  versionTarget,
  writeNewChangelogs,
  writeRootRelease,
  writeRootChangelog,
} from '../lib/version'
import { getIsConfirmed } from '../lib/get-is-confirmed'
import { getHasValidToken } from '../lib/get-has-valid-token'

export type Command = 'build' | 'version' | 'publish' | 'release'

export interface RunCommand {
  packageName: string
  subCommand?: Command
}

export const releaseCommand = async ({
  packageName,
  subCommand,
}: RunCommand) => {
  const cloneDir = 'build'
  const makeContext = await getMakeContext({
    targetPackageName: packageName,
    cloneDir,
  })
  const packageNames = getFsChildPackageNames({
    fsChildren: makeContext.rootNode.fsChildren,
  })

  if (!makeContext.targetNode) {
    console.log(
      `Package ${
        packageName || '<none>'
      } not found, please choose from:\n${packageNames.join('\n')}`
    )
    process.exit(0)
  }

  const hasValidToken = await getHasValidToken({ subCommand })
  if (!hasValidToken) {
    console.log("A valid GITHUB_TOKEN needs to be set for 'publish' command")
    process.exit(0)
  }
  const isConfirmed = await getIsConfirmed({
    subCommand,
    buildNodes: makeContext.buildNodes,
  })
  if (!isConfirmed) process.exit(0)

  switch (subCommand) {
    case 'build':
      await buildPackage({ makeContext })
      await buildCloneDir({ makeContext })
      break
    case 'version':
      await versionTarget({ makeContext })
      await versionDependencies({ makeContext })
      await getNewChangelogs({ makeContext })
      await writeNewChangelogs({ makeContext })
      await writeRootRelease({ makeContext })
      await writeRootChangelog({ makeContext })
      await buildCloneDir({ makeContext })
      break
    case 'publish':
      await getNewChangelogs({ makeContext })
      await publish({ makeContext })
      break
    default:
      await buildPackage({ makeContext })
      await versionTarget({ makeContext })
      await versionDependencies({ makeContext })
      await getNewChangelogs({ makeContext })
      await writeNewChangelogs({ makeContext })
      await writeRootRelease({ makeContext })
      await writeRootChangelog({ makeContext })
      await buildCloneDir({ makeContext })
      await publish({ makeContext })
      break
  }
}
