import { readFileSync } from 'fs'
import { Octokit } from '@octokit/rest'
import { ArboristNode } from './arborist'

interface GithubRelease {
  packageName: string
  rootNode: ArboristNode
  tag: string
  token: string
}

export const githubRelease = async ({
  packageName,
  rootNode,
  tag,
  token,
}: GithubRelease) => {
  const octokit = new Octokit({ auth: token })
  const releaseFile = `${rootNode.path}/RELEASE.md`
  const body = readFileSync(releaseFile, 'utf-8')
  const [owner, repo] = packageName.split('/')

  await octokit.rest.repos.createRelease({
    body,
    draft: false,
    name: `Release ${tag}`,
    owner: owner.slice(1),
    repo,
    tag_name: tag,
  })
}
