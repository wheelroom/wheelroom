import deepmerge from 'deepmerge'

export type ArboristPackage = Record<string, any>

export const depTypeToKey = {
  dev: 'devDependencies',
  optional: 'optionalDependencies',
  peer: 'peerDependencies',
  peerOptional: 'peerOptionalDependencies',
  prod: 'dependencies',
  workspace: 'workspace',
}

export type Edge = {
  name: string
  type: keyof typeof depTypeToKey
}

export type EdgeOut = {
  name: string
  type: keyof typeof depTypeToKey
}

export type ArboristNode = {
  path: string
  edgesOut: Set<EdgeOut>
  package: ArboristPackage
}

export const packagePath = (node: ArboristNode, cloneDir?: string) =>
  cloneDir
    ? `${node.path}/${cloneDir}/package.json`
    : `${node.path}/package.json`

export interface GetFsChild {
  fsChildren: Set<ArboristNode>
  packageName: string
}

export const getFsChild = ({ fsChildren, packageName }: GetFsChild) =>
  Array.from(fsChildren).find(
    (node) => node.package.name === packageName
  ) as ArboristNode

export interface GetFsChildPackageNames {
  fsChildren: Set<ArboristNode>
}

export const getFsChildPackageNames = ({
  fsChildren,
}: GetFsChildPackageNames) =>
  Array.from(fsChildren).map((node) => node.package.name)

export interface updatePackage {
  cloneDir?: string
  node: ArboristNode
  packageObject: ArboristPackage
}

export interface GetEdgesOut {
  packageName: string
  fsChildren: Set<ArboristNode>
}
// Edges out are packages that depend on packageName
export const getEdgesOut = ({ packageName, fsChildren }: GetEdgesOut) => {
  const edgesOut: EdgeOut[] = []
  fsChildren.forEach((node) => {
    node.edgesOut.forEach((edgeOut: Edge) => {
      if (edgeOut.name === packageName) {
        edgesOut.push({
          name: node.package.name,
          type: edgeOut.type,
        })
      }
    })
  })
  return edgesOut
}

export interface GetRecursEdgesOut {
  packageName: string
  fsChildren: Set<ArboristNode>
}
// Recursive edges out are packages that depend on packageName and the packages
// that depend on these packages
export const getRecursEdgesOut = ({
  packageName,
  fsChildren,
}: GetRecursEdgesOut) => {
  const edgesOut = getEdgesOut({ packageName, fsChildren })
  edgesOut.forEach((edgeOut) => {
    const recursEdgesOut = getRecursEdgesOut({
      packageName: edgeOut.name,
      fsChildren,
    })
    edgesOut.push(...recursEdgesOut)
  })
  return edgesOut
}

export interface UpdateEdgesOut {
  node: ArboristNode
  fsChildren: Set<ArboristNode>
}

export const updateEdgesOut = ({ fsChildren, node }: UpdateEdgesOut) => {
  const edgesOut = getEdgesOut({
    fsChildren,
    packageName: node.package.name,
  })
  for (const edgeOut of edgesOut) {
    const depNode = getFsChild({ fsChildren, packageName: edgeOut.name })
    if (edgeOut.type !== 'workspace') {
      depNode.package = deepmerge.all([
        depNode.package,
        {
          [depTypeToKey[edgeOut.type]]: {
            [node.package.name]: node.package.version,
          },
        },
      ])
    }
  }
}

export interface GetNodesToPublish {
  node: ArboristNode
  fsChildren: Set<ArboristNode>
}

export const getSyncedNodes = ({ fsChildren, node }: GetNodesToPublish) => {
  // Get all packages that use node and the packages that use those packages
  const edgesOut = getRecursEdgesOut({
    packageName: node.package.name,
    fsChildren,
  })
  const syncedNodes = []
  for (const edgeOut of edgesOut) {
    const depNode = getFsChild({ fsChildren, packageName: edgeOut.name })
    syncedNodes.push(depNode)
  }
  // Remove duplicates
  const syncedNodesSet = Array.from(new Set(syncedNodes))
  return syncedNodesSet.reverse()
}
