const tracker = {
  filename: 'package.json',
  updater: require('./version-updater'),
}

module.exports = {
  bumpFiles: [tracker],
  packageFiles: [tracker],
}
