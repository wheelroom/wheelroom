import updater from '../../version-updater'

const rootPackage = {
  filename: '../../package.json',
  updater,
}

const gatsbyStarterPackage = {
  filename: './package.json',
  updater,
}

export const bumpFiles = [rootPackage, gatsbyStarterPackage]
export const packageFiles = [rootPackage]

export const types = [
  { type: 'feat', section: 'Features' },
  { type: 'fix', section: 'Bug Fixes' },
  { type: 'chore', section: 'Commits' },
  { type: 'docs', section: 'Documentation' },
  { type: 'style', section: 'Styling' },
  { type: 'refactor', section: 'Code Refactoring' },
  { type: 'perf', hidden: true },
  { type: 'test', hidden: true },
]
