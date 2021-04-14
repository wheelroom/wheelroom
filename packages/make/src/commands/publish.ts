import path from 'path'
import { MakeContext } from '../get-make-context'
import { cmdRun } from '../npm'

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
  const gitAddFiles = []
  for (const publishNode of buildNodes) {
    gitAddFiles.push(path.relative(process.cwd(), publishNode.path))
  }
  const version = `v${rootNode.package.version}`

  // const tagMessage = `# ${version}\n\n${makeContext.newChangeLog}`
  const cmd = 'git'

  let args
  args = ['add', ...gitAddFiles]
  cmdRun({ cmd, args, node: rootNode })

  args = ['commit', '-m', version, ...gitAddFiles]
  cmdRun({ cmd, args, node: rootNode })

  args = ['tag', '-m', version, version]
  cmdRun({ cmd, args, node: rootNode })

  args = ['push', '--follow-tags']
  cmdRun({ cmd, args, node: rootNode })
}
