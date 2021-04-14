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

export const getBranch = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec('git rev-parse --abbrev-ref HEAD', (error, stdout) => {
      if (error) {
        return reject('')
      }
      const branch = stdout.trim()
      return resolve(branch)
    })
  })
}
