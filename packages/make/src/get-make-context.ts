import Arborist from '@npmcli/arborist'
import { ArboristNode, getFsChild, getSyncedNodes } from './npm'

export interface MakeContext {
  buildNodes: ArboristNode[]
  cloneDir: string
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
  const syncedNodes = getSyncedNodes({ node: targetNode, fsChildren })
  const buildNodes = [targetNode, ...syncedNodes]

  return { rootNode, targetNode, buildNodes, cloneDir } as MakeContext
}
