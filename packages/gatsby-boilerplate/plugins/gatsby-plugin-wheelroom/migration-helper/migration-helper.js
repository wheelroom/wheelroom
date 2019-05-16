const runMigration = require('contentful-migration/built/bin/cli').runMigration
const result = require('dotenv').config()

if (result.error) {
  throw result.error
}

class ProcessError extends Error {
  constructor(data) {
    super(data.responseId)
    this.name = 'ProcessError'
    this.data = data
  }
}

const createModel = function({ jsPath }) {
  const options = {
    filePath: process.cwd() + '/' + jsPath,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CMA_TOKEN,
  }

  return runMigration(options)
}

const createContentType = function(data) {
  if (data.model.name && data.model.description && data.model.displayField) {
    data.contentType = data.migration
      .createContentType(data.model.type)
      .name(data.model.name)
      .description(data.model.description)
      .displayField(data.model.displayField)
  } else {
    data.contentType = data.migration.editContentType(type)
  }

  if (data.contentType) {
    return data
  } else {
    data.errorMessage = 'Could not create content type'
    throw new ProcessError(data)
  }
}

const createFields = function(data) {
  for (var fieldName in data.model.fields) {
    let field = data.contentType.createField(fieldName)

    for (var spec in data.model.fields[fieldName].specs) {
      field[spec](data.model.fields[fieldName].specs[spec])
    }

    if (!data.model.fields[fieldName].widgetId) continue

    data.contentType.changeEditorInterface(
      fieldName,
      data.model.fields[fieldName].widgetId,
      data.model.fields[fieldName].settings
    )
  }
  return data
}

const processMigration = function(data) {
  return Promise.resolve(data)
}

const doMigration = function({ migration, context, jsonPath }) {
  const model = require(process.cwd() + '/' + jsonPath)
  console.log('model', model)
  console.log('doMigration jsonPath', jsonPath)

  let data = {
    migration,
    model,
    contentType: null,
    errorMessage: null,
  }

  return processMigration(data)
    .then(createContentType)
    .then(createFields)
}

module.exports = {
  createModel,
  doMigration,
}
