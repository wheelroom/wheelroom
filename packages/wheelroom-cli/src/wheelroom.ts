#!/usr/bin/env node

import migrationHelper from './migration-helper/migration-helper'


console.log('wheelroom is working!')


const createModel = () => {
  return migrationHelper
    .createModel({
      jsPath: 'src/models/page-model.js',
    })
    .catch(error => {
      console.error('Skipping createPageModel:', error.message)
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
  .then(logResults)
  .catch(handleError)
