import standardVersion from 'standard-version'
import {
  ArboristNode,
  writeNodeSync,
  commitTypes,
  updateEdgesOut,
  cmdRun,
} from './npm'

export interface Version {
  rootNode: any
  targetNode: any
  buildNodes: any
}

export const version = async ({
  rootNode,
  targetNode,
  buildNodes,
}: Version) => {
  // Copy root version to target package and release with standard-version
  targetNode.package.version = rootNode.package.version
  writeNodeSync({ node: targetNode })
  process.chdir(targetNode.path)
  await standardVersion({
    path: targetNode.path,
    skip: { commit: true },
    tagPrefix: `${targetNode.package.name}@`,
    types: commitTypes,
    // dryRun: true,
  })
  process.chdir(rootNode.path)

  // Update root package version with released target
  rootNode.package.version = targetNode.package.version
  const fsChildrenPlusRoot = new Set(rootNode.fsChildren) as Set<ArboristNode>
  fsChildrenPlusRoot.add(rootNode as ArboristNode)

  // Make packages depend on new version of package
  for (const buildNode of buildNodes) {
    updateEdgesOut({ node: buildNode, fsChildren: fsChildrenPlusRoot })
  }

  // Write all changes to all nodes
  fsChildrenPlusRoot.forEach((node: ArboristNode) => writeNodeSync({ node }))

  // Update package-lock.json
  await cmdRun({ cmd: 'npm', args: ['install'], node: rootNode })
}
