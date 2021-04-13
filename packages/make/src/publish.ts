import { cmdRun } from './npm'

export interface Publish {
  cloneDir: string
  buildNodes: any
}

export const publish = async ({ buildNodes, cloneDir }: Publish) => {
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
  // TODO: Commit and push to git
  // console.log(`\ngit push --follow-tags origin/next`)
}
