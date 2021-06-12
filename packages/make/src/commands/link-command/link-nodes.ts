/**
 * - Lookup all workspace packages
 * - Create symlinks in node_modules to all package/build folders
 */

import { mkdir, symlink } from 'fs/promises'
import { existsSync } from 'fs'
import { ArboristNode } from '../../lib/arborist'

export interface LinkNodes {
  fsChildrenArray: ArboristNode[]
  dryRun?: boolean
}

export const linkNodes = async ({ fsChildrenArray, dryRun }: LinkNodes) => {
  for (const node of fsChildrenArray) {
    const splitPath = node.package.name.split('/')
    const linkName = splitPath.pop()
    const path = ['node_modules', ...splitPath].join('/')
    const linkFrom = ['node_modules', ...splitPath, linkName].join('/')
    const linkTo = node.path
    const linkFromExists = existsSync(linkFrom)
    const linkToExists = existsSync(linkTo)
    if (linkFromExists) console.log(`Skipping: ${linkFrom} already exists`)
    if (!linkFromExists && !linkToExists)
      console.log(`Skipping: ${linkTo} does not exist`)
    if (!linkFromExists && linkToExists) {
      if (!dryRun) {
        await mkdir(path, { recursive: true })
        await symlink(linkTo, linkFrom)
      }
      console.log(`${dryRun ? 'Will create' : 'Created'}: ${linkFrom} -> <pkg>`)
    }
  }
}
