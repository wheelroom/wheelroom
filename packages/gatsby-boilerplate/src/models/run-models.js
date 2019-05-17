const migrationHelper = require('../../plugins/gatsby-plugin-wheelroom/migration-helper/migration-helper')

const createPageModel = function(data) {
  return migrationHelper.createModel({
    jsPath: 'src/models/page-model.js',
  }).catch(error => {
    console.error('Skipping createPageModel:', error.message)
  })
}

const createPartSiteGlobalsModel = function(data) {
  return migrationHelper.createModel({
    jsPath: 'src/models/part-site-globals-model.js',
  }).catch(error => {
    console.error('Skipping createPartSiteGlobalsModel:', error.message)
  })
}

const createContentArticleModel = function(data) {
  return migrationHelper.createModel({
    jsPath: 'src/models/content-article-model.js',
  }).catch(error => {
    console.error('Skipping createContentArticleModel:', error.message)
  })
}

const createSectionArticleModel = function(data) {
  return migrationHelper.createModel({
    jsPath: 'src/models/section-article-model.js',
  }).catch(error => {
    console.error('Skipping createSectionArticleModel:', error.message)
  })
}

const logResults = function(data) {
  console.log('Created all models')
}

const handleError = error => {
  console.error('Run models:', error.message)
}

Promise.resolve({})
  .then(createPageModel)
  .then(createPartSiteGlobalsModel)
  .then(createContentArticleModel)
  .then(createSectionArticleModel)
  .then(logResults)
  .catch(handleError)
