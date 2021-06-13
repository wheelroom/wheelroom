/**
 * - Lookup all workspace packages
 * - Sync root package.json values to all packages in monorepo
 */

import { ArboristNode } from '../../lib/arborist'
import { writeNodeSync } from '../../lib/read-write-node'
import { sortPackage } from './sort-package'

export interface LinkNodes {
  fsChildrenArray: ArboristNode[]
  rootNode: any
  dryRun?: boolean
}

const syncFields = [
  'author',
  'bugs',
  'contributors',
  'engines',
  'homepage',
  'keywords',
  'license',
  'publishConfig',
  'repository',
]

export const syncNodes = async ({
  rootNode,
  fsChildrenArray,
  dryRun,
}: LinkNodes) => {
  console.log(`Fields: ${syncFields.join(', ')}`)
  for (const node of fsChildrenArray) {
    syncFields.forEach(
      (field) => (node.package[field] = rootNode.package[field])
    )
    node.package = sortPackage({ packageObject: node.package })

    if (!dryRun) {
      writeNodeSync({ node })
    }
    console.log(`${dryRun ? 'Will sync' : 'Synced'} to: ${node.package.name}`)
  }
}
