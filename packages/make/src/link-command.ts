/**
 * - Lookup all workspace packages
 * - Create symlinks in node_modules to all package/build folders
 */

import Arborist from '@npmcli/arborist'
import { ArboristNode } from './npm'

export interface LinkCommand {
  monoRepoPath: string
}

export const linkCommand = async ({ monoRepoPath }: LinkCommand) => {
  const cloneDir = 'build'
  const arborist = new Arborist({ path: monoRepoPath })
  const rootNode = await arborist.loadActual()
  const fsChildren = rootNode.fsChildren
  fsChildren.forEach((node: ArboristNode) => {
    console.log('node', node.package.name, node.path, cloneDir)
  })
}
