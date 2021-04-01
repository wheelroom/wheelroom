// version-updater.js
import stringifyPackage from 'stringify-package'
import detectIndent from 'detect-indent'
import detectNewline from 'detect-newline'

import metaData from './package.json'

export const readVersion = function (contents) {
  return JSON.parse(contents).version
}

export const writeVersion = function (contents, version) {
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
