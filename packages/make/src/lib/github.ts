import { readFileSync } from 'fs'
import { exec } from 'child_process'
import { Octokit } from '@octokit/rest'
import { ArboristNode } from './arborist'

export const gitKeys = {
  branch: ['rev-parse', '--abbrev-ref', 'HEAD'],
  sha: ['rev-parse', 'HEAD'],
  shortSha: ['rev-parse', '--short', 'HEAD'],
  currentUser: ['config', '--global', 'user.name'],
  lastCommitTime: ['log', '--format="%ci"', '-n1', 'HEAD'],
  lastCommitMessage: ['log', '--format="%B"', '-n1', 'HEAD'],
  lastCommitAuthor: ['log', '--format="%cN"', '-n1', 'HEAD'],
  lastCommitNumber: ['rev-list', '--count', 'HEAD'],
  remoteOriginUrl: ['config', '--get', 'remote.origin.url'],
}

export type GitKey = keyof typeof gitKeys
interface GetGitKey {
  key: GitKey
}

export const getGitKey = ({ key }: GetGitKey) => {
  const args = gitKeys[key]
  return new Promise((resolve, reject) => {
    exec(`git ${args.join(' ')}`, (error, stdout) => {
      if (error) {
        return reject('')
      }
      return resolve(stdout.trim())
    })
  })
}

interface ParseOriginUrl {
  remoteOriginUrl: string
}

export const parseOriginUrl = ({ remoteOriginUrl }: ParseOriginUrl) => {
  const parts = remoteOriginUrl.split('github.com')
  if (parts.length !== 2) return { owner: 'none', repo: 'none' }
  const endsOk = parts[1].slice(-4) === '.git'
  const startsOk = parts[1][0] === ':' || parts[1][0] === '/'
  if (!startsOk || !endsOk) return { owner: 'none', repo: 'none' }
  const ownerRepo = parts[1].slice(1, -4).split('/')
  return { owner: ownerRepo[0], repo: ownerRepo[1] }
}

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
