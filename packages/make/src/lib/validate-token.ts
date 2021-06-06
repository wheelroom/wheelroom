import {
  getGitKey,
  parseOriginUrl,
  githubCollaboratorPermissionLevel,
  githubUserName,
} from './github'

interface GetHasValidToken {
  subCommand?: string
}

export const validateToken = async ({ subCommand }: GetHasValidToken) => {
  if (subCommand === 'build' || subCommand === 'version') return true
  if (!process.env.GITHUB_TOKEN) return false

  const username = await githubUserName({
    token: process.env.GITHUB_TOKEN || '',
  })
  if (username === 'none') {
    console.log('Could not authenticate with Github')
    return false
  }
  console.log(`Checking token permissions level for Github user ${username}`)

  const remoteOriginUrl = <string>await getGitKey({ key: 'remoteOriginUrl' })
  const { owner, repo } = parseOriginUrl({ remoteOriginUrl })

  const permissionLevel = await githubCollaboratorPermissionLevel({
    owner,
    repo,
    token: process.env.GITHUB_TOKEN || '',
    username: 'jaccomeijer',
  })

  if (permissionLevel === 'admin' || permissionLevel === 'write') {
    console.log(`Token permission level is valid: ${permissionLevel}`)
    return true
  }
  console.log(
    `Token permission level (${permissionLevel}) cannot create a Github release`
  )

  return false
}
