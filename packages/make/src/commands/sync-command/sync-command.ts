/**
 * - Lookup all workspace packages
 * - Sync root package.json values to all packages in monorepo
 */

import Arborist from '@npmcli/arborist'
import { ArboristNode } from '../../lib/arborist'
import { confirm } from './confirm'
import { syncNodes } from './sync-nodes'

export interface SyncCommand {
  monoRepoPath: string
}

export const syncCommand = async ({ monoRepoPath }: SyncCommand) => {
  const arborist = new Arborist({ path: monoRepoPath })
  const rootNode = await arborist.loadActual()
  const fsChildrenArray = Array.from(rootNode.fsChildren) as ArboristNode[]
  if (fsChildrenArray.length === 0) {
    console.log(`No packages found in ${monoRepoPath}`)
    process.exit(0)
  }
  const isConfirmed = await confirm({
    fsChildrenArray,
    rootNode,
  })
  if (!isConfirmed) process.exit(0)
  syncNodes({ rootNode, fsChildrenArray })
}
