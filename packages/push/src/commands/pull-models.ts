export interface PullModels {
  path: string
}

export const pullModels = ({ path }: PullModels) => {
  console.log(`pull models, path:${path}`)
}
