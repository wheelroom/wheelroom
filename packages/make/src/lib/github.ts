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

interface GithubAccess {
  token: string
  username: string
  owner: string
  repo: string
}

export type PermissionLevel = 'admin' | 'write' | 'read' | 'none'

export const githubCollaboratorPermissionLevel = async ({
  token,
  username,
  owner,
  repo,
}: GithubAccess) => {
  const octokit = new Octokit({ auth: token })
  const result = await octokit.rest.repos.getCollaboratorPermissionLevel({
    owner,
    repo,
    username,
  })
  const level = (result && result.data && result.data.permission) || 'none'
  return level as PermissionLevel
}

interface GithubUserName {
  token: string
}

export const githubUserName = async ({ token }: GithubUserName) => {
  const octokit = new Octokit({ auth: token })
  const result = await octokit.rest.users.getAuthenticated()
  return (result && result.data && result.data.login) || 'none'
}
