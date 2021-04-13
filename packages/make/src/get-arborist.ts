import Arborist from '@npmcli/arborist'
import { getFsChild, getFsChildPackageNames, getSyncedNodes } from './npm'

interface GetArborist {
  packageName: string
}

export const getArborist = async ({ packageName }: GetArborist) => {
  const arborist = new Arborist({ path: process.cwd() })
  const rootNode = await arborist.loadActual()
  const fsChildren = rootNode.fsChildren
  const targetNode = getFsChild({ fsChildren, packageName })
  const syncedNodes = getSyncedNodes({ node: targetNode, fsChildren })
  const buildNodes = [targetNode, ...syncedNodes]
  const packageNames = getFsChildPackageNames({ fsChildren })

  return { rootNode, targetNode, buildNodes, packageNames }
}
