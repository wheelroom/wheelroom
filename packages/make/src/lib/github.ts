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
  let response
  try {
    const octokit = new Octokit({ auth: token })
    response = await octokit.rest.repos.getCollaboratorPermissionLevel({
      owner,
      repo,
      username,
    })
  } catch (e) {
    console.log('Invalid github token')
  }
  const level =
    (response && response.data && response.data.permission) || 'none'
  return level as PermissionLevel
}

interface GithubUserName {
  token: string
}

export const githubUserName = async ({ token }: GithubUserName) => {
  let response
  try {
    const octokit = new Octokit({ auth: token })
    response = await octokit.rest.users.getAuthenticated()
  } catch (e) {
    console.log('Invalid github token')
  }
  return (response && response.data && response.data.login) || 'none'
}
