export interface PullContent {
  path: string
}

export const pullContent = ({ path }: PullContent) => {
  console.log(`pull content, path:${path}`)
}
