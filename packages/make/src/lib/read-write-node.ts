import { readFileSync, writeFileSync } from 'fs'
import deepmerge from 'deepmerge'
import { ArboristNode, ArboristPackage, packagePath } from './arborist'

export interface ReadNodeSync {
  node: ArboristNode
}

export const readNodeSync = ({ node }: ReadNodeSync) => {
  const data = readFileSync(packagePath(node), 'utf8')
  return JSON.parse(data)
}

export interface WriteNodeSync {
  node: ArboristNode
  packageObject?: ArboristPackage
}

export const writeNodeSync = ({ node, packageObject }: WriteNodeSync) => {
  const pkgObjToSave = deepmerge.all([
    {},
    node.package,
    packageObject || {},
  ]) as any
  delete pkgObjToSave._id
  writeFileSync(
    packagePath(node),
    JSON.stringify(pkgObjToSave, null, 2),
    'utf8'
  )
}
