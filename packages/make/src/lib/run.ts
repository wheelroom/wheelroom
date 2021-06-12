import { spawn } from 'child_process'
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
  cmd: string
  node: ArboristNode
}

export const cmdRun = async ({ cmd, args, node }: CmdRun) => {
  const cwd = node.path
  console.log(`==> (${cwd}) ${cmd} ${args.join(' ')}`)
  const child = spawn(cmd, args, { cwd })
  await Promise.all([
    logStream({ stream: child.stdout }),
    logStream({ stream: child.stderr }),
  ])
}

export interface NpmRun {
  args: string[]
  node: ArboristNode
}

export const npmRun = async ({ args, node }: NpmRun) => {
  await cmdRun({
    cmd: 'npm',
    args: ['run', ...args],
    node,
  })
}
