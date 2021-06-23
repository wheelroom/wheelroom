/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

import { getFsChildPackageNames } from '../../lib/arborist'
import { validateToken } from '../../lib/validate-token'
import { makeContextFactory } from './make-context-factory'
import { confirm } from './confirm'
import {
  getNewChangelogs,
  versionDependencies,
  versionTarget,
  writeNewChangelogs,
  writeRootRelease,
  writeRootChangelog,
} from './version'
import { publish } from './publish'
import { buildPackage } from './build'

export type Command = 'build' | 'version' | 'publish' | 'release'

export interface RunCommand {
  packageName: string
  subCommand?: Command
}

export const releaseCommand = async ({
  packageName,
  subCommand,
}: RunCommand) => {
  const makeContext = await makeContextFactory({
    targetPackageName: packageName,
  })
  const packageNames = getFsChildPackageNames({
    fsChildren: makeContext.rootNode.fsChildren,
  })

  if (makeContext.buildNodes.length === 0) {
    console.log(
      `Package ${
        packageName || '<none>'
      } not found, please choose from:\n${packageNames.join('\n')}`
    )
    process.exit(0)
  }

  const isValidToken = await validateToken({ subCommand })
  if (!isValidToken) {
    console.log("A valid GITHUB_TOKEN needs to be set for 'publish' command")
    process.exit(0)
  }
  const isConfirmed = await confirm({
    subCommand,
    buildNodes: makeContext.buildNodes,
  })
  if (!isConfirmed) process.exit(0)

  switch (subCommand) {
    case 'build':
      await buildPackage({ makeContext })
      break
    case 'version':
      await versionTarget({ makeContext })
      await versionDependencies({ makeContext })
      await getNewChangelogs({ makeContext })
      await writeNewChangelogs({ makeContext })
      await writeRootRelease({ makeContext })
      await writeRootChangelog({ makeContext })
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
      await publish({ makeContext })
      break
  }
}
