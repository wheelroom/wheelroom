import path from 'path'
import { MakeContext } from '../get-make-context'
// import { cmdRun } from '../npm'

export interface PublishMakeContext {
  makeContext: MakeContext
}

export const publish = async ({ makeContext }: PublishMakeContext) => {
  // const { buildNodes, cloneDir } = makeContext
  // for (const publishNode of buildNodes) {
  //   if (!publishNode.package.private) {
  //     await cmdRun({
  //       cmd: 'npm',
  //       args: ['publish'],
  //       cloneDir,
  //       node: publishNode,
  //     })
  //   }
  // }
  const { buildNodes, rootNode } = makeContext
  const gitAddFiles = []
  for (const publishNode of buildNodes) {
    gitAddFiles.push(path.relative(process.cwd(), publishNode.path))
  }

  const cmd = 'git'
  let args
  args = ['add', ...gitAddFiles]
  console.log(cmd, args)

  args = ['commit', '-m', `v${rootNode.package.version}`]
  console.log(cmd, args)

  args = ['tag']
  console.log(cmd, args)

  args = ['push', '--follow-tags']
  console.log(cmd, args)
}
