import conventionalRecommendedBump from 'conventional-recommended-bump'
import conventionalChangelog from 'conventional-changelog'
import createConfig from 'conventional-changelog-conventionalcommits'

const config = createConfig({
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Commits' },
    { type: 'docs', section: 'Documentation' },
    { type: 'style', section: 'Styling' },
    { type: 'refactor', section: 'Code Refactoring' },
    { type: 'perf', hidden: true },
    { type: 'test', hidden: true },
  ],
})

export interface BumpVersion {
  path: string
}

export const bumpVersion = ({
  path,
}: BumpVersion): Promise<conventionalRecommendedBump.Callback.Recommendation> => {
  return new Promise((resolve, reject) => {
    const options = {
      config,
      path,
    } as conventionalRecommendedBump.Options
    conventionalRecommendedBump(options, (error, release) => {
      if (error) return reject(error)
      return resolve(release)
    })
  })
}

export interface GetNewChangelog {
  newVersion: string
  path: string
}

export const callConventionalChangelog = ({
  newVersion,
  path,
}: GetNewChangelog): Promise<string> => {
  return new Promise((resolve, reject) => {
    let newChangelog = ''
    const changelogStream = conventionalChangelog(
      { config },
      { version: newVersion },
      { merges: null, path }
    )
    changelogStream.on('error', (error) => {
      return reject(error)
    })
    changelogStream.on('data', (buffer) => {
      newChangelog += buffer.toString()
    })
    changelogStream.on('end', () => {
      return resolve(newChangelog)
    })
  })
}
