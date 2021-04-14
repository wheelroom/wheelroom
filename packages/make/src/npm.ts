import { copyFileSync, readFileSync, writeFileSync } from 'fs'
import { spawn, exec } from 'child_process'
import conventionalRecommendedBump from 'conventional-recommended-bump'
import conventionalChangelog from 'conventional-changelog'
import deepmerge from 'deepmerge'

type Package = Record<string, any>

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
  package: Package
}

// TODO: Fix proper type
type Stream = any

export interface LogStream {
  stream: Stream
}

export const packagePath = (node: ArboristNode, cloneDir?: string) =>
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
  packageObject?: Package
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

export interface CmdRun {
  args: string[]
  cloneDir?: string
  cmd: string
  node: ArboristNode
}

export const cmdRun = async ({ cmd, args, node, cloneDir }: CmdRun) => {
  const cwd = cloneDir ? `${node.path}/${cloneDir}` : node.path
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
  node: ArboristNode
}

export const npmRun = async ({ args, cloneDir, node }: NpmRun) => {
  await cmdRun({
    cmd: 'npm',
    args: ['run', ...args],
    node,
    cloneDir,
  })
}

export interface updatePackage {
  cloneDir?: string
  node: ArboristNode
  packageObject: Package
}

export interface CloneToDirSync {
  node: ArboristNode
  cloneDir: string
  fileNameList: string[]
}

export const cloneToDirSync = async ({
  node,
  cloneDir,
  fileNameList,
}: CloneToDirSync) => {
  for (const fileName of fileNameList) {
    copyFileSync(
      `${node.path}/${fileName}`,
      `${node.path}/${cloneDir}/${fileName}`
    )
  }
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
  // Sync all packages that use node to the node version version
  const edgesOut = getRecursEdgesOut({
    packageName: node.package.name,
    fsChildren,
  })
  const syncedNodes = []
  for (const edgeOut of edgesOut) {
    const depNode = getFsChild({ fsChildren, packageName: edgeOut.name })
    depNode.package.version = node.package.version
    syncedNodes.push(depNode)
  }
  return syncedNodes
}

export const getBranch = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec('git rev-parse --abbrev-ref HEAD', (error, stdout) => {
      if (error) {
        return reject('')
      }
      const branch = stdout.trim()
      return resolve(branch)
    })
  })
}

export interface BumpVersion {
  path: string
  // tagPrefix: string
}

export const bumpVersion = ({
  path,
}: // tagPrefix,
BumpVersion): Promise<conventionalRecommendedBump.Callback.Recommendation> => {
  return new Promise((resolve, reject) => {
    const options = {
      preset: 'angular',
      // tagPrefix,
      path,
    } as conventionalRecommendedBump.Options
    conventionalRecommendedBump(options, (error, release) => {
      if (error) return reject(error)
      return resolve(release)
    })
  })
}

export interface GetNewChangelog {
  newVersion: string
  path: string
  // tagPrefix: string
}

export const callConventionalChangelog = ({
  newVersion,
  path,
}: // tagPrefix,
GetNewChangelog): Promise<string> => {
  return new Promise((resolve, reject) => {
    let newChangelog = ''
    const changelogStream = conventionalChangelog(
      { preset: 'angular' /** tagPrefix */ },
      { version: newVersion },
      { merges: null, path }
    )
    changelogStream.on('error', (error) => {
      return reject(error)
    })
    changelogStream.on('data', (buffer) => {
      newChangelog += buffer.toString()
    })
    changelogStream.on('end', function () {
      return resolve(newChangelog)
    })
  })
}
