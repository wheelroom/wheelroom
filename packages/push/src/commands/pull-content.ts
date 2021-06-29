export interface PullContent {
  path: string
}

export const pullContent = async ({ path }: PullContent) => {
  console.log(`pull content, path:${path}`)
}
