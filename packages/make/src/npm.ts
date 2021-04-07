import { spawn } from 'child_process'
import fs from 'fs'

type Package = Record<string, any>

type Node = {
  path: string
  edgesOut?: any
  package?: Package
}

type DepMap = {
  optional: 'optionalDependencies'
  prod: 'dependencies'
  peer: 'peerDependencies'
  dev: 'devDependencies'
}
type DepType = keyof DepMap

// TODO: Fix proper type
type Edge = {
  name: string
  type: DepType
}

// TODO: Fix proper type
type Stream = any

export interface LogStream {
  stream: Stream
}
export const packagePath = (node: Node) => `${node.path}/package.json`
export const logStream = async ({ stream }: LogStream) => {
  for await (const data of stream) {
    process.stdout.write(data)
  }
}
export interface ReadPackageSync {
  node: Node
}
export const readPackageSync = ({ node }: ReadPackageSync) => {
  const data = fs.readFileSync(packagePath(node), 'utf8')
  return JSON.parse(data)
}
export interface WritePackageSync {
  node: Node
  packageObject: Package
}
export const writePackageSync = ({ node, packageObject }: WritePackageSync) => {
  fs.writeFileSync(
    packagePath(node),
    JSON.stringify(packageObject, null, 2),
    'utf8'
  )
}
export interface BuildTask {
  cmd: string
  args: string[]
  cwd: string
}
export const buildTask = async ({ cmd, args, cwd }: BuildTask) => {
  console.log(`==> (${cwd}) ${cmd} ${args.join(' ')}`)
  const child = spawn(cmd, args, { cwd })
  await Promise.all([
    logStream({ stream: child.stdout }),
    logStream({ stream: child.stderr }),
  ])
}
export interface updatePackage {
  node: Node
  cloneDir?: string
  packageObject: Package
}
export const updatePackage = ({
  node,
  cloneDir,
  packageObject,
}: updatePackage) => {
  const cloneNode = {
    path: cloneDir ? `${node.path}/${cloneDir}` : node.path,
  }
  const packageObjectCopy = Object.assign(
    {},
    readPackageSync({ node: cloneNode })
  )
  for (const key in packageObject) {
    packageObjectCopy[key] = packageObject[key]
  }
  writePackageSync({ node: cloneNode, packageObject: packageObjectCopy })
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
export interface GetDependencyList {
  targetNode: Node
  nodes: Node[]
}
export type Dependency = {
  node: Node
  edge: Edge
}
export const getDependencyList = ({ targetNode, nodes }: GetDependencyList) => {
  const list: Dependency[] = []
  for (const node of nodes) {
    for (const edge of node.edgesOut) {
      if (edge[0] === targetNode.package!.name) {
        list.push({
          node,
          edge: edge[1],
        })
      }
    }
  }
  return list
}
export interface GetRecursiveDependencyList {
  targetNode: Node
  nodes: Node[]
  dependencyList: Dependency[]
}
export const getRecursiveDependencyList = ({
  targetNode,
  nodes,
  dependencyList,
}: GetRecursiveDependencyList) => {
  const depList = getDependencyList({ targetNode, nodes })
  dependencyList.push(...depList)
  dependencyList.forEach((dep) => {
    getRecursiveDependencyList({
      targetNode: dep.node,
      nodes,
      dependencyList,
    })
  })
}
export interface UpdateDependencyVersions {
  dependencyList: Dependency[]
  version: string
}
export const updateDependencyVersions = ({
  dependencyList,
  version,
}: UpdateDependencyVersions) => {
  const depMap: DepMap = {
    optional: 'optionalDependencies',
    prod: 'dependencies',
    peer: 'peerDependencies',
    dev: 'devDependencies',
  }
  for (const dep of dependencyList) {
    const packageObject = readPackageSync({ node: dep.node })
    packageObject[depMap[dep.edge.type]][dep.edge.name] = version
    writePackageSync({ node: dep.node, packageObject })
    console.log(`- Updated package ${dep.node.package!.name}`)
  }
}
