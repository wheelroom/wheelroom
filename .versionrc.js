const updater = require('./version-updater')

const rootPackage = {
  filename: './package.json',
  updater,
}

const anyPackage = {
  filename: './packages/any/package.json',
  updater,
}

const gatsbyStarterPackage = {
  filename: './starters/gatsby-starter/package.json',
  updater,
}

module.exports = {
  bumpFiles: [anyPackage, rootPackage, gatsbyStarterPackage],
  packageFiles: [rootPackage],
}
