import Arborist from '@npmcli/arborist'
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

export const getMakeContext = async ({
  cloneDir,
  targetPackageName,
}: GetMakeContext) => {
  const arborist = new Arborist({ path: process.cwd() })
  const rootNode = await arborist.loadActual()
  const fsChildren = rootNode.fsChildren
  const targetNode = getFsChild({ fsChildren, packageName: targetPackageName })

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
