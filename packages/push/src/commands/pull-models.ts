export interface PullModels {
  path: string
}

export const pullModels = async ({ path }: PullModels) => {
  console.log(`pull models, path:${path}`)
}
