import { spawn } from 'child_process'
import fs from 'fs'
import deepmerge from 'deepmerge'

type Package = Record<string, any>

export const depTypeToKey = {
  optional: 'optionalDependencies',
  prod: 'dependencies',
  peer: 'peerDependencies',
  dev: 'devDependencies',
}

type Edge = {
  name: string
  type: keyof typeof depTypeToKey
}
export type EdgeOut = {
  name: string
  type: keyof typeof depTypeToKey
}
export type Node = {
  path: string
  edgesOut: Set<EdgeOut>
  package: Package
}

// TODO: Fix proper type
type Stream = any

export interface LogStream {
  stream: Stream
}
export const packagePath = (node: Node, cloneDir?: string) =>
  cloneDir
    ? `${node.path}/${cloneDir}/package.json`
    : `${node.path}/package.json`

export const logStream = async ({ stream }: LogStream) => {
  for await (const data of stream) {
    process.stdout.write(data)
  }
}
export const commitTypes = [
  { type: 'feat', section: 'Features' },
  { type: 'fix', section: 'Bug Fixes' },
  { type: 'chore', section: 'Commits' },
  { type: 'docs', section: 'Documentation' },
  { type: 'style', section: 'Styling' },
  { type: 'refactor', section: 'Code Refactoring' },
  { type: 'perf', hidden: true },
  { type: 'test', hidden: true },
]
export interface DeepMerge {
  target: Package
  source: Package
}
export interface GetFsChild {
  fsChildren: Set<Node>
  packageName: string
}
export const getFsChild = ({ fsChildren, packageName }: GetFsChild) =>
  Array.from(fsChildren).find(
    (node) => node.package!.name === packageName
  ) as Node
export interface GetFsChildPackageNames {
  fsChildren: Set<Node>
}
export const getFsChildPackageNames = ({
  fsChildren,
}: GetFsChildPackageNames) =>
  Array.from(fsChildren).map((node) => node.package!.name)

export interface ReadNodeSync {
  node: Node
  cloneDir?: string
}
export const readNodeSync = ({ node, cloneDir }: ReadNodeSync) => {
  const data = fs.readFileSync(packagePath(node, cloneDir), 'utf8')
  return JSON.parse(data)
}
export interface WriteNodeSync {
  cloneDir?: string
  node: Node
  packageObject?: Package
}
export const writeNodeSync = ({
  node,
  cloneDir,
  packageObject,
}: WriteNodeSync) => {
  const pkgObjToSave = deepmerge.all([
    {},
    node.package!,
    packageObject || {},
  ]) as any
  delete pkgObjToSave._id
  fs.writeFileSync(
    packagePath(node, cloneDir),
    JSON.stringify(pkgObjToSave, null, 2),
    'utf8'
  )
}
export interface CmdRun {
  cmd: string
  args: string[]
  cwd: string
}
export const cmdRun = async ({ cmd, args, cwd }: CmdRun) => {
  console.log(`==> (${cwd}) ${cmd} ${args.join(' ')}`)
  const child = spawn(cmd, args, { cwd })
  await Promise.all([
    logStream({ stream: child.stdout }),
    logStream({ stream: child.stderr }),
  ])
}
export interface NpmRun {
  args: string[]
  cloneDir?: string
  node: Node
}
export const npmRun = async ({ args, cloneDir, node }: NpmRun) => {
  await cmdRun({
    cmd: 'npm',
    args: ['run', ...args],
    cwd: cloneDir ? `${node.path}/${cloneDir}` : node.path,
  })
}
export interface updatePackage {
  cloneDir?: string
  node: Node
  packageObject: Package
}
export interface CloneToDirSync {
  node: Node
  cloneDir: string
  fileNameList: string[]
}
export const cloneToDirSync = async ({
  node,
  cloneDir,
  fileNameList,
}: CloneToDirSync) => {
  for (const fileName of fileNameList) {
    fs.copyFileSync(
      `${node.path}/${fileName}`,
      `${node.path}/${cloneDir}/${fileName}`
    )
  }
}
export interface GetEdgesOut {
  packageName: string
  fsChildren: Set<Node>
}
// Edges out are packages that depend on packageName
export const getEdgesOut = ({ packageName, fsChildren }: GetEdgesOut) => {
  const edgesOut: EdgeOut[] = []
  fsChildren.forEach((node) => {
    node.edgesOut.forEach((edgeOut: Edge) => {
      if (edgeOut.name === packageName) {
        edgesOut.push({
          name: node.package!.name,
          type: edgeOut.type,
        })
      }
    })
  })
  return edgesOut
}
export interface GetRecursEdgesOut {
  packageName: string
  fsChildren: Set<Node>
}
// Recursive ddges out are packages that depend on packageName and the packages
// that depend on these
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
  node: Node
  fsChildren: Set<Node>
}
export const updateEdgesOut = ({ fsChildren, node }: UpdateEdgesOut) => {
  const edgesOut = getEdgesOut({
    fsChildren,
    packageName: node.package!.name,
  })
  for (const edgeOut of edgesOut) {
    const depNode = getFsChild({ fsChildren, packageName: edgeOut.name })
    console.log('BAD SOURCES!', {
      [depTypeToKey[edgeOut.type]]: {
        [edgeOut.name]: node.package!.version,
      },
    })
    depNode.package[depTypeToKey[edgeOut.type]][
      edgeOut.name
    ] = node.package!.version
  }
}
export interface GetNodesToPublish {
  node: Node
  fsChildren: Set<Node>
}

export const getSyncedNodes = ({ fsChildren, node }: GetNodesToPublish) => {
  // Sync all packages that use node to the node version version
  const edgesOut = getRecursEdgesOut({
    packageName: node.package!.name,
    fsChildren,
  })
  const syncedNodes = []
  for (const edgeOut of edgesOut) {
    const depNode = getFsChild({ fsChildren, packageName: edgeOut.name })
    depNode.package.version = node.package!.version
    syncedNodes.push(depNode)
  }
  return syncedNodes
}
