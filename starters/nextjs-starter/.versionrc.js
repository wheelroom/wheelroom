module.exports = {
  tagPrefix: '@wheelroom/nextjs-starter@',
  path: '.',
  silent: true,
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
}
