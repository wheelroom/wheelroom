import { getGit, parseOriginUrl } from './child-process'
import { githubCollaboratorPermissionLevel, githubUserName } from './github'

interface GetHasValidToken {
  subCommand?: string
}

export const getHasValidToken = async ({ subCommand }: GetHasValidToken) => {
  if (subCommand === 'build' || subCommand === 'version') return true
  if (!process.env.GITHUB_TOKEN) return false

  const username = await githubUserName({
    token: process.env.GITHUB_TOKEN || '',
  })
  console.log(`Checking token permissions level for Github user ${username}`)

  const remoteOriginUrl = <string>await getGit({ key: 'remoteOriginUrl' })
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
