/**
 * - Lookup all workspace packages
 * - List all packages
 */

import Arborist from '@npmcli/arborist'
import { ArboristNode } from '../lib/arborist'

export interface LinkCommand {
  monoRepoPath: string
}

export const listCommand = async ({ monoRepoPath }: LinkCommand) => {
  const arborist = new Arborist({ path: monoRepoPath })
  const rootNode = await arborist.loadActual()
  const fsChildrenArray = Array.from(rootNode.fsChildren) as ArboristNode[]
  if (fsChildrenArray.length === 0) {
    console.log(`No packages found in ${monoRepoPath}`)
    process.exit(0)
  }
  for (const node of fsChildrenArray) console.log(node.package.name)
}
