/**
 * - Lookup all workspace packages
 * - Sync root package.json values to all packages in monorepo
 */

import { ArboristNode } from '../../lib/arborist'
import { writeNodeSync } from '../../lib/read-write-node'

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
    const packageObject = {} as Record<string, string>
    syncFields.forEach(
      (field) => (packageObject[field] = rootNode.package[field])
    )
    if (!dryRun) {
      writeNodeSync({
        node,
        packageObject,
      })
    }
    console.log(`${dryRun ? 'Will sync' : 'Synced'} to: ${node.package.name}`)
  }
}
