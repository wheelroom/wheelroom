import { npmRun } from '../../lib/run'
import { MakeContext } from './make-context-factory'

export interface BuildMakeContext {
  makeContext: MakeContext
}

export const buildPackage = async ({ makeContext }: BuildMakeContext) => {
  // Build all nodes
  for (const buildNode of makeContext.buildNodes) {
    await npmRun({ args: ['build'], node: buildNode })
  }
}
