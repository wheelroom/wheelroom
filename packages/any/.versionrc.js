const updater = require('../../version-updater')

const rootPackage = {
  filename: '../../package.json',
  updater,
}

const anyPackage = {
  filename: './package.json',
  updater,
}

module.exports.bumpFiles = [anyPackage, rootPackage]
module.exports.packageFiles = [rootPackage]
module.exports.types = [
  { type: 'feat', section: 'Features' },
  { type: 'fix', section: 'Bug Fixes' },
  { type: 'chore', section: 'Commits' },
  { type: 'docs', section: 'Documentation' },
  { type: 'style', section: 'Styling' },
  { type: 'refactor', section: 'Code Refactoring' },
  { type: 'perf', hidden: true },
  { type: 'test', hidden: true },
]
