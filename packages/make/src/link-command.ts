/**
 * - Lookup all workspace packages
 * - Create symlinks in node_modules to all package/build folders
 */

import Arborist from '@npmcli/arborist'
import { ArboristNode } from './npm'
// import { mkdir } from 'fs/promises'

export interface LinkCommand {
  monoRepoPath: string
}

export const linkCommand = async ({ monoRepoPath }: LinkCommand) => {
  const cloneDir = 'build'
  const arborist = new Arborist({ path: monoRepoPath })
  const rootNode = await arborist.loadActual()
  const fsChildren = rootNode.fsChildren
  if (fsChildren.length === 0) {
    console.log(`No packages found in ${monoRepoPath}`)
    process.exit(0)
  }
  fsChildren.forEach((node: ArboristNode) => {
    const splitPath = node.package.name.split('/')
    const linkName = splitPath.pop()
    const path = ['node_modules', ...splitPath].join('/')
    const linkFrom = ['node_modules', ...splitPath, linkName].join('/')
    const linkTo = `${node.path}/${cloneDir}`
    // await mkdir(`node_modules`, { recursive: true })
    console.log(`mkdir -p ${path}`)
    console.log(`ln -s ${linkFrom} => ${linkTo}`)
  })
}
