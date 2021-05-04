interface GetHasValidToken {
  subCommand?: string
}

export const getHasValidToken = ({ subCommand }: GetHasValidToken) => {
  if (subCommand === 'build' || subCommand === 'version') return true
  if (process.env.GITHUB_TOKEN) return true
  return false
}
