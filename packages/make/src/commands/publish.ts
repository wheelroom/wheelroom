import path from 'path'
import { MakeContext } from '../get-make-context'
import { cmdRun, getBranch } from '../npm'

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
  const tagPrefix = `${makeContext.targetNode.package.name}@`
  const version = rootNode.package.version
  const versionWithPrefix = `${tagPrefix}${version}`
  // const releaseMessage = `# ${versionWithPrefix}\n\n${makeContext.newChangeLog}`
  const cmd = 'git'

  let args
  args = ['add', ...gitAddFiles]
  await cmdRun({ cmd, args, node: rootNode })

  args = ['commit', '-m', `v${versionWithPrefix}`, ...gitAddFiles]
  await cmdRun({ cmd, args, node: rootNode })

  args = ['tag', '-m', versionWithPrefix, `v${version}`]
  await cmdRun({ cmd, args, node: rootNode })

  args = ['push', '--follow-tags']
  await cmdRun({ cmd, args, node: rootNode })

  const branch = await getBranch()
  console.log(
    'Yes, all done! By the way, I did not use this yet but your branch is:',
    branch
  )
}
