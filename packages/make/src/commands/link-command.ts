/**
 * - Lookup all workspace packages
 * - Create symlinks in node_modules to all package/build folders
 */

import { mkdir, symlink } from 'fs/promises'
import { existsSync } from 'fs'
import Arborist from '@npmcli/arborist'
import { ArboristNode } from '../lib/arborist'

export interface LinkCommand {
  monoRepoPath: string
}

export const linkCommand = async ({ monoRepoPath }: LinkCommand) => {
  const cloneDir = 'build'
  const arborist = new Arborist({ path: monoRepoPath })
  const rootNode = await arborist.loadActual()
  const fsChildrenArray = Array.from(rootNode.fsChildren) as ArboristNode[]
  if (fsChildrenArray.length === 0) {
    console.log(`No packages found in ${monoRepoPath}`)
    process.exit(0)
  }
  for (const node of fsChildrenArray) {
    const splitPath = node.package.name.split('/')
    const linkName = splitPath.pop()
    const path = ['node_modules', ...splitPath].join('/')
    const linkFrom = ['node_modules', ...splitPath, linkName].join('/')
    const linkTo = `${node.path}/${cloneDir}`
    const linkFromExists = existsSync(linkFrom)
    const linkToExists = existsSync(linkTo)
    if (linkFromExists) console.log(`Skipping: ${linkFrom} already exists`)
    if (!linkFromExists && !linkToExists)
      console.log(`Skipping: ${linkTo} does not exist`)
    if (!linkFromExists && linkToExists) {
      await mkdir(path, { recursive: true })
      await symlink(linkTo, linkFrom)
      console.log(`Created: ${linkFrom} -> <pkg>/${cloneDir}`)
    }
  }
}
