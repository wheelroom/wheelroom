import path from 'path'
import { MakeContext } from '../lib/make-context-factory'
import { cmdRun } from '../lib/run'
import { getGitKey, parseOriginUrl, githubRelease } from '../lib/github'

export interface PublishMakeContext {
  makeContext: MakeContext
}

export const publish = async ({ makeContext }: PublishMakeContext) => {
  const { buildNodes, rootNode, targetNode, cloneDir } = makeContext
  for (const publishNode of buildNodes) {
    if (publishNode.package.private) {
      console.log(
        `X=> Will not publish private package ${publishNode.package.name}`
      )
    } else {
      await cmdRun({
        cmd: 'npm',
        args: ['publish'],
        cloneDir,
        node: publishNode,
      })
    }
  }
  const gitAddFiles = [
    'CHANGELOG.md',
    'package-lock.json',
    'package.json',
    'RELEASE.md',
  ]
  for (const publishNode of buildNodes) {
    gitAddFiles.push(path.relative(process.cwd(), publishNode.path))
  }
  const version = targetNode.package.version
  const cmd = 'git'

  let args
  args = ['add', ...gitAddFiles]
  await cmdRun({ cmd, args, node: rootNode })

  args = ['commit', '-m', version, ...gitAddFiles]
  await cmdRun({ cmd, args, node: rootNode })

  args = ['tag', '-m', version, version]
  await cmdRun({ cmd, args, node: rootNode })

  const branch = <string>await getGitKey({ key: 'branch' })
  args = ['push', 'origin', branch, '--follow-tags']
  await cmdRun({ cmd, args, node: rootNode })

  const remoteOriginUrl = <string>await getGitKey({ key: 'remoteOriginUrl' })
  const { owner, repo } = parseOriginUrl({ remoteOriginUrl })
  await githubRelease({
    owner,
    repo,
    rootNode,
    tag: version,
    token: process.env.GITHUB_TOKEN || '',
  })
}
