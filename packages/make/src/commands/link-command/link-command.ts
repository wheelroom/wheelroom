/**
 * - Lookup all workspace packages
 * - Create symlinks in node_modules to all package/build folders
 */

import Arborist from '@npmcli/arborist'
import { ArboristNode } from '../../lib/arborist'
import { confirm } from './confirm'
import { linkNodes } from './link-nodes'

export interface LinkCommand {
  monoRepoPath: string
}

export const linkCommand = async ({ monoRepoPath }: LinkCommand) => {
  const arborist = new Arborist({ path: monoRepoPath })
  const rootNode = await arborist.loadActual()
  const fsChildrenArray = Array.from(rootNode.fsChildren) as ArboristNode[]
  if (fsChildrenArray.length === 0) {
    console.log(`No packages found in ${monoRepoPath}`)
    process.exit(0)
  }
  const isConfirmed = await confirm({
    fsChildrenArray,
  })
  if (!isConfirmed) process.exit(0)
  linkNodes({ fsChildrenArray })
}
