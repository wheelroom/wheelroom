const updater = require('../../version-updater')

const rootPackage = {
  filename: '../../package.json',
  updater,
}

const gatsbyStarterPackage = {
  filename: './package.json',
  updater,
}

module.exports = {
  bumpFiles: [rootPackage, gatsbyStarterPackage],
  packageFiles: [rootPackage],
}
