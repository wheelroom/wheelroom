import path from 'path'
import { MakeContext } from '../lib/get-make-context'
import { cmdRun, getBranch } from '../lib/child-process'

export interface PublishMakeContext {
  makeContext: MakeContext
}

export const publish = async ({ makeContext }: PublishMakeContext) => {
  const { buildNodes, rootNode, cloneDir } = makeContext
  for (const publishNode of buildNodes) {
    if (!publishNode.package.private) {
      await cmdRun({
        cmd: 'npm',
        args: ['publish'],
        cloneDir,
        node: publishNode,
      })
    }
  }
  const gitAddFiles = ['package.json', 'package-lock.json']
  for (const publishNode of buildNodes) {
    gitAddFiles.push(path.relative(process.cwd(), publishNode.path))
  }
  const version = rootNode.package.version
  const cmd = 'git'

  let args
  args = ['add', ...gitAddFiles]
  await cmdRun({ cmd, args, node: rootNode })

  args = ['commit', '-m', version, ...gitAddFiles]
  await cmdRun({ cmd, args, node: rootNode })

  args = ['tag', '-m', version, version]
  await cmdRun({ cmd, args, node: rootNode })

  const branch = await getBranch()
  args = ['push', 'origin', branch, '--follow-tags']
  await cmdRun({ cmd, args, node: rootNode })
}
