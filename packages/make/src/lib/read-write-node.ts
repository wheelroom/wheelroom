import { copyFileSync, readFileSync, writeFileSync } from 'fs'
import deepmerge from 'deepmerge'
import { ArboristNode, ArboristPackage, packagePath } from './arborist'

export interface ReadNodeSync {
  node: ArboristNode
  cloneDir?: string
}

export const readNodeSync = ({ node, cloneDir }: ReadNodeSync) => {
  const data = readFileSync(packagePath(node, cloneDir), 'utf8')
  return JSON.parse(data)
}

export interface WriteNodeSync {
  cloneDir?: string
  node: ArboristNode
  packageObject?: ArboristPackage
}

export const writeNodeSync = ({
  node,
  cloneDir,
  packageObject,
}: WriteNodeSync) => {
  const pkgObjToSave = deepmerge.all([
    {},
    node.package,
    packageObject || {},
  ]) as any
  delete pkgObjToSave._id
  writeFileSync(
    packagePath(node, cloneDir),
    JSON.stringify(pkgObjToSave, null, 2),
    'utf8'
  )
}
