import { spawn, exec } from 'child_process'
import { ArboristNode } from './arborist'

// TODO: Fix proper type
type Stream = any

export interface LogStream {
  stream: Stream
}

export const logStream = async ({ stream }: LogStream) => {
  for await (const data of stream) {
    process.stdout.write(data)
  }
}

export interface CmdRun {
  args: string[]
  cloneDir?: string
  cmd: string
  node: ArboristNode
}

export const cmdRun = async ({ cmd, args, node, cloneDir }: CmdRun) => {
  const cwd = cloneDir ? `${node.path}/${cloneDir}` : node.path
  console.log(`==> (${cwd}) ${cmd} ${args.join(' ')}`)
  const child = spawn(cmd, args, { cwd })
  await Promise.all([
    logStream({ stream: child.stdout }),
    logStream({ stream: child.stderr }),
  ])
}

export interface NpmRun {
  args: string[]
  cloneDir?: string
  node: ArboristNode
}

export const npmRun = async ({ args, cloneDir, node }: NpmRun) => {
  await cmdRun({
    cmd: 'npm',
    args: ['run', ...args],
    node,
    cloneDir,
  })
}

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
interface GetGit {
  key: GitKey
}

export const getGit = ({ key }: GetGit) => {
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
