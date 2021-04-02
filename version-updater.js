// version-updater.js
const stringifyPackage = require('stringify-package')
const detectIndent = require('detect-indent')
const detectNewline = require('detect-newline')

const metaData = require('./package.json')

module.exports.readVersion = function (contents) {
  return JSON.parse(contents).version
}

module.exports.writeVersion = function (contents, version) {
  const json = JSON.parse(contents)
  let indent = detectIndent(contents).indent
  let newline = detectNewline(contents)
  json.version = version
  json.keywords = metaData.keywords
  json.homepage = metaData.homepage
  json.bugs = metaData.bugs
  json.repository = metaData.repository
  json.license = metaData.license
  json.author = metaData.author
  json.contributors = metaData.contributors
  json.engines = metaData.engines
  json.publishConfig = metaData.publishConfig

  return stringifyPackage(json, indent, newline)
}
