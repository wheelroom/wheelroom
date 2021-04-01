const rootPackage = {
    filename: 'package.json',
    updater: require('./version-updater'),
  }
  
const anyPackage = {
  filename: 'packages/any/package.json',
  updater: require('./version-updater'),
}

module.exports = {
  bumpFiles: [anyPackage],
  packageFiles: [rootPackage],
}
