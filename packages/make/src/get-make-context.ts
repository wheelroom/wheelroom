import Arborist from '@npmcli/arborist'
import { ArboristNode, getFsChild, getSyncedNodes } from './npm'

export interface MakeContext {
  buildNodes: ArboristNode[]
  cloneDir: string
  newChangeLog?: string
  rootNode: any
  targetNode: ArboristNode
}

export interface GetMakeContext {
  packageName: string
  cloneDir: string
}

export const getMakeContext = async ({
  cloneDir,
  packageName,
}: GetMakeContext) => {
  const arborist = new Arborist({ path: process.cwd() })
  const rootNode = await arborist.loadActual()
  const fsChildren = rootNode.fsChildren
  const targetNode = getFsChild({ fsChildren, packageName })

  let buildNodes = [] as ArboristNode[]
  if (targetNode) {
    buildNodes = [
      targetNode,
      ...getSyncedNodes({ node: targetNode, fsChildren }),
    ]
  }

  return { rootNode, targetNode, buildNodes, cloneDir } as MakeContext
}
