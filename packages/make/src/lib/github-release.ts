import { readFileSync } from 'fs'
import { Octokit } from '@octokit/rest'
import { ArboristNode } from './arborist'

interface GithubRelease {
  owner: string
  repo: string
  rootNode: ArboristNode
  tag: string
  token: string
}

export const githubRelease = async ({
  owner,
  repo,
  rootNode,
  tag,
  token,
}: GithubRelease) => {
  const octokit = new Octokit({ auth: token })
  const releaseFile = `${rootNode.path}/RELEASE.md`
  const body = readFileSync(releaseFile, 'utf-8')

  await octokit.rest.repos.createRelease({
    body,
    draft: false,
    name: `Release ${tag}`,
    owner,
    repo,
    tag_name: tag,
  })
}
