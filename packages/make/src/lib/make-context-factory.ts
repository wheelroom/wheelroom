import Arborist from '@npmcli/arborist'
import { getGitKey, parseOriginUrl } from '../lib/github'
import { ArboristNode, getFsChild, getSyncedNodes } from './arborist'

export interface MakeContext {
  buildNodes: ArboristNode[]
  cloneDir: string
  newChangeLogs: {
    [packageName: string]: string
  }
  rootNode: any
  targetNode: ArboristNode
}

export interface GetMakeContext {
  targetPackageName: string
  cloneDir: string
}

export const makeContextFactory = async ({
  cloneDir,
  targetPackageName,
}: GetMakeContext) => {
  const arborist = new Arborist({ path: process.cwd() })
  const rootNode = await arborist.loadActual()
  const fsChildren = rootNode.fsChildren
  let targetNode = getFsChild({ fsChildren, packageName: targetPackageName })

  if (!targetNode) {
    // Try prefixing the packageName with the owner
    const remoteOriginUrl = <string>await getGitKey({ key: 'remoteOriginUrl' })
    const { owner } = parseOriginUrl({ remoteOriginUrl })
    const prefixedTargetPackageName = `@${owner}/${targetPackageName}`
    console.log(
      `Package ${
        targetPackageName || '<none>'
      } not found, prefixing owner: ${prefixedTargetPackageName}`
    )
    targetNode = getFsChild({
      fsChildren,
      packageName: prefixedTargetPackageName,
    })
  }

  let buildNodes = [] as ArboristNode[]
  if (targetNode) {
    buildNodes = [
      ...getSyncedNodes({ node: targetNode, fsChildren }),
      targetNode,
    ]
  }

  return {
    buildNodes,
    cloneDir,
    newChangeLogs: {},
    rootNode,
    targetNode,
  } as MakeContext
}
