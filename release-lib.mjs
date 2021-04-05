import { spawn } from 'child_process'
import fs from 'fs'

export const logStream = async ({ stream }) => {
  for await (const data of stream) {
    process.stdout.write(data)
  }
}
export const packagePath = (node) => `${node.path}/package.json`

export const readPackageSync = ({ node }) => {
  const data = fs.readFileSync(packagePath(node), 'utf8')
  return JSON.parse(data)
}
export const writePackageSync = ({ node, json }) => {
  fs.writeFileSync(packagePath(node), JSON.stringify(json, null, 2), 'utf8')
}
export const buildTask = async ({ cmd, args, cwd }) => {
  console.log(`==> (${cwd}) ${cmd} ${args.join(' ')}`)
  const child = spawn(cmd, args, { cwd })
  await Promise.all([
    logStream({ stream: child.stdout }),
    logStream({ stream: child.stderr }),
  ])
}
export const updateClonedPackage = ({ node, cloneDir, json }) => {
  const cloneNode = {
    path: `${node.path}/${cloneDir}`,
  }
  const jsonCopy = Object.assign({}, readPackageSync({ node: cloneNode }))
  for (const key in json) {
    jsonCopy[key] = json[key]
  }
  writePackageSync({ node: cloneNode, json: jsonCopy })
}
export const cloneToDirSync = async ({ node, cloneDir, fileNameList }) => {
  for (const fileName of fileNameList) {
    fs.copyFileSync(
      `${node.path}/${fileName}`,
      `${node.path}/${cloneDir}/${fileName}`
    )
  }
}
export const getDependencyList = ({ targetNode, nodes }) => {
  const list = []
  for (const node of nodes) {
    for (const edge of node.edgesOut) {
      if (edge[0] === targetNode.package.name) {
        list.push({
          node,
          edge: edge[1],
        })
      }
    }
  }
  return list
}
export const updateDependencyVersions = ({ dependencyList, version }) => {
  const depMap = {
    optional: 'optionalDependencies',
    prod: 'dependencies',
    peer: 'peerDependencies',
    dev: 'devDependencies',
  }
  for (const dep of dependencyList) {
    const json = readPackageSync({ node: dep.node })
    json[depMap[dep.edge.type]][dep.edge.name] = version
    writePackageSync({ node: dep.node, json })
    console.log(`- Updated package ${dep.node.package.name}`)
  }
}
