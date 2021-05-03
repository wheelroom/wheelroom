/**
 * Simple Github release demo
 *
 * Start dev mode like this:
 *
 * npm run dev
 *
 * Then:
 *
 * GITHUB_TOKEN=ghp_xxx node build/lib/github-release.js
 *
 * Docs are here: https://octokit.github.io/rest.js/v18#repos-list-releases
 *
 */

import { Octokit } from '@octokit/rest'

const main = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  // CREATE A RELEASE
  // const release = await octokit.rest.repos.createRelease({
  //   body: '# Heading\n\n- list 1\n- list 2\n\n## Other heading\n',
  //   draft: false,
  //   name: '6.19.1',
  //   owner: 'wheelroom',
  //   repo: 'wheelroom',
  //   tag_name: '6.19.1',
  // })
  // console.log('release', release)

  // DELETE A RELEASE
  const releaseId = 42375489
  await octokit.rest.repos.deleteRelease({
    owner: 'wheelroom',
    repo: 'wheelroom',
    release_id: releaseId,
  })
  console.log('Deleted release', 42375489)

  // LIST RELEASES
  // const releases = await octokit.rest.repos.listReleases({
  //   owner: 'wheelroom',
  //   repo: 'wheelroom',
  // })
  // const releaseMap = releases.data.map((release) => [
  //   release.tag_name,
  //   release.id,
  // ])
  // console.log('releaseMap', releaseMap)
}

main()
