const updater = require('../../version-updater')

const rootPackage = {
  filename: '../../package.json',
  updater,
}

const anyPackage = {
  filename: './package.json',
  updater,
}

module.exports = {
  bumpFiles: [anyPackage, rootPackage],
  packageFiles: [rootPackage],
}
